import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

interface FiltersSidebarProps {
  categories: string[] | undefined;
  selectedCategories: string[];
  minPrice: string;
  maxPrice: string;
  setMinPrice: (value: string) => void;
  setMaxPrice: (value: string) => void;
  onCategoryChange: (category: string) => void;
  hasFilters: boolean;
  resetFilters: () => void;
}

const FiltersSidebar = ({
  categories,
  selectedCategories,
  minPrice,
  maxPrice,
  onCategoryChange,
  setMinPrice,
  setMaxPrice,
  hasFilters,
  resetFilters,
}: FiltersSidebarProps) => {
  return (
    <Box border="1px solid #ccc" borderRadius={1} p={2}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6">Filters</Typography>
        {hasFilters && (
          <Tooltip title="Clear Filters">
            <IconButton onClick={resetFilters} size="small">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        )}
      </Box>
      <Typography variant="subtitle2" gutterBottom>
        Categories
      </Typography>
      <FormGroup>
        {categories?.map((category) => (
          <FormControlLabel
            key={category}
            control={
              <Checkbox
                checked={selectedCategories.includes(category)}
                onChange={() => onCategoryChange(category)}
              />
            }
            label={category.charAt(0).toUpperCase() + category.slice(1)}
          />
        ))}
      </FormGroup>

      <Typography variant="subtitle2" gutterBottom mt={2}>
        Price Range
      </Typography>
      <Box display="flex" gap={2} mb={2} mt={2}>
        <TextField
          label="Min"
          type="number"
          size="small"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <TextField
          label="Max"
          type="number"
          size="small"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </Box>
    </Box>
  );
};

export default FiltersSidebar;
