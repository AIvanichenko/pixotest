import { Box, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";
import SortIcon from "@mui/icons-material/Sort";

interface TopControlsProps {
  filtersOpen: boolean;
  toggleFilters: () => void;
  view: "grid" | "list";
  setView: (view: "grid" | "list") => void;
  sortOption: string | null;
  anchorEl: null | HTMLElement;
  open: boolean;
  handleSortClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleSort: (option: string) => void;
  closeMenu: () => void;
}

const TopControls = ({
  filtersOpen,
  toggleFilters,
  view,
  setView,
  sortOption,
  anchorEl,
  open,
  handleSortClick,
  handleSort,
  closeMenu,
}: TopControlsProps) => {
  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      gap={2}
      mb={2}
    >
      <Tooltip title="Toggle Filters">
        <IconButton
          onClick={toggleFilters}
          color={filtersOpen ? "primary" : "default"}
        >
          <FilterAltIcon />
        </IconButton>
      </Tooltip>

      <Box>
        <Tooltip title="Sort">
          <IconButton onClick={handleSortClick} color="primary">
            <SortIcon />
          </IconButton>
        </Tooltip>
        <Menu anchorEl={anchorEl} open={open} onClose={closeMenu}>
          {[
            { key: "priceAsc", label: "Price: Low to High" },
            { key: "priceDesc", label: "Price: High to Low" },
            { key: "titleAsc", label: "Title: A–Z" },
            { key: "titleDesc", label: "Title: Z–A" },
            { key: "ratingAsc", label: "Rating: Low to High" },
            { key: "ratingDesc", label: "Rating: High to Low" },
          ].map((option) => (
            <MenuItem
              key={option.key}
              selected={sortOption === option.key}
              onClick={() => handleSort(option.key)}
            >
              {option.label}
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Box display="flex" alignItems="center" gap={1}>
        <IconButton
          color={view === "grid" ? "primary" : "default"}
          onClick={() => setView("grid")}
        >
          <ViewModuleIcon />
        </IconButton>
        <IconButton
          color={view === "list" ? "primary" : "default"}
          onClick={() => setView("list")}
        >
          <ViewListIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopControls;
