import React from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { NewsCategory } from '@/types/news';

interface NewsSearchFilterProps {
  searchQuery: string;
  selectedCategory: string;
  onSearchChange: (query: string) => void;
  onCategoryChange: (category: string) => void;
  onClear: () => void;
}

const categories: NewsCategory[] = [
  'Research',
  'Regulatory',
  'Partnership',
  'Product Launch',
  'Awards',
  'Clinical Trial',
  'Technology',
  'Company News'
];

export const NewsSearchFilter: React.FC<NewsSearchFilterProps> = ({
  searchQuery,
  selectedCategory,
  onSearchChange,
  onCategoryChange,
  onClear
}) => {
  const hasActiveFilters = searchQuery || selectedCategory;

  return (
    <div className="space-y-6 mb-12">
      {/* Search Bar */}
      <div className="relative max-w-2xl mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search articles by title, author, or content..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-12 pr-12 py-6 text-lg bg-card/50 backdrop-blur-sm border-border"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button
          variant={selectedCategory === '' ? 'default' : 'outline'}
          size="sm"
          onClick={() => onCategoryChange('')}
          className={selectedCategory === '' ? 'bg-gradient-to-r from-pink-500 to-violet-500' : ''}
        >
          All Categories
        </Button>
        
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            size="sm"
            onClick={() => onCategoryChange(category)}
            className={selectedCategory === category ? 'bg-gradient-to-r from-pink-500 to-violet-500' : ''}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <div className="text-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClear}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="mr-2 h-4 w-4" />
            Clear all filters
          </Button>
        </div>
      )}
    </div>
  );
};

