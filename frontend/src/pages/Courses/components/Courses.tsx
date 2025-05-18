import React, { useEffect, useMemo, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { AppDispatch, RootState } from '../../../redux/store';
import { fetchCourses } from '../../../redux/slices/coursesSlice';
import { fetchCategories } from '../../../redux/slices/categoriesSlice';
import ProductCard from '../../../shared/components/card/card';
import './courses.css';

const Courses: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const navigate = useNavigate();

  const { courses } = useSelector((state: RootState) => state.courses);
  const { categories } = useSelector((state: RootState) => state.categories);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isCategoriesLoaded, setIsCategoriesLoaded] = useState(false);
  const itemsPerPage = 12;

  useEffect(() => {
    void dispatch(fetchCourses());
    void dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    if (categories.length > 0) {
      setIsCategoriesLoaded(true);
    }
  }, [categories]);

  useEffect(() => {
    if (!isCategoriesLoaded) return;

    const params = new URLSearchParams(location.search);
    const categoryFromQuery = params.get('category');
    const priceFromQuery = params.get('price');
    const searchFromQuery = params.get('search');

    setSelectedCategories(categoryFromQuery ? categoryFromQuery.split(',') : []);
    setMaxPrice(priceFromQuery ? Number(priceFromQuery) : 1000);
    setSearchTerm(searchFromQuery || '');
    setCurrentPage(1);
  }, [location.search, isCategoriesLoaded]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updateQueryParams = (params: Record<string, string | undefined>) => {
    const searchParams = new URLSearchParams(location.search);

    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== '') {
        searchParams.set(key, value);
      } else {
        searchParams.delete(key);
      }
    });

    void navigate({ search: searchParams.toString() }, { replace: true });
  };

  const handleCategoryChange = (categoryId: string) => {
    const newSelected = selectedCategories.includes(categoryId)
      ? selectedCategories.filter((id) => id !== categoryId)
      : [...selectedCategories, categoryId];

    setSelectedCategories(newSelected);
    setCurrentPage(1);

    updateQueryParams({
      category: newSelected.join(',') || undefined,
      price: maxPrice.toString(),
      search: searchTerm || undefined,
    });
  };

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchCategory = selectedCategories.length > 0 ? selectedCategories.includes(course.categoryId.toString()) : true;

      const numericPrice = typeof course.price === 'string' ? parseFloat(course.price.replace('$', '')) : course.price;

      const matchPrice = numericPrice <= maxPrice;
      const matchSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());

      return matchCategory && matchPrice && matchSearch;
    });
  }, [courses, selectedCategories, maxPrice, searchTerm]);

  const paginatedCourses = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredCourses.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredCourses, currentPage]);

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);

  return (
    <div className="courses-page">
      <div className="courses-content">
        <div className="filters-column">
          {courses.length > 0 && (
            <div className="course-preview-banner">
              <img src={courses[0].logoImage} alt={courses[0].title} className="banner-image" />
              <div className="banner-overlay">
                <h2>{courses[0].title}</h2>
              </div>
            </div>
          )}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for courses"
              value={searchTerm}
              onChange={(e) => {
                const value = e.target.value;
                setSearchTerm(value);
                setCurrentPage(1);
                updateQueryParams({
                  category: selectedCategories.join(',') || undefined,
                  price: maxPrice.toString(),
                  search: value || undefined,
                });
              }}
            />
          </div>
          <div className="filter-sidebar">
            <h3>Subjects</h3>
            {categories.map((category) => (
              <label key={category.id} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.id.toString())}
                  onChange={() => handleCategoryChange(category.id.toString())}
                />
                {category.name}
              </label>
            ))}

            <h3>Price up ${maxPrice}</h3>
            <input
              type="range"
              min={0}
              max={1000}
              value={maxPrice}
              onChange={(e) => {
                const value = Number(e.target.value);
                setMaxPrice(value);
                setCurrentPage(1);
                updateQueryParams({
                  category: selectedCategories.join(',') || undefined,
                  price: value.toString(),
                  search: searchTerm || undefined,
                });
              }}
              style={{ accentColor: 'orange' }}
            />
          </div>
        </div>

        <div className="right-column">
          <div className="results-header">
            {selectedCategories.length > 0 ? (
              <h2>
                {filteredCourses.length} results for{' '}
                {categories
                  .filter((cat) => selectedCategories.includes(cat.id.toString()))
                  .map((cat) => cat.name)
                  .join(' | ')}
              </h2>
            ) : (
              <h2>All courses for you</h2>
            )}
          </div>

          <div className="cards-container2">
            {paginatedCourses.length > 0 ? (
              paginatedCourses.map((product, index: number) => (
                <ProductCard
                  key={index}
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  content={product.content}
                  logoImage={product.logoImage}
                  price={product.price}
                  categoryId={product.categoryId}
                  teacherId={product.teacherId}
                />
              ))
            ) : (
              <p className="no-courses">No courses found</p>
            )}
          </div>
        </div>
      </div>
      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="page-btn"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            ←
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i} className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`} onClick={() => setCurrentPage(i + 1)}>
              {i + 1}
            </button>
          ))}

          <button
            className="page-btn"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            →
          </button>
        </div>
      )}
    </div>
  );
};

export default Courses;
