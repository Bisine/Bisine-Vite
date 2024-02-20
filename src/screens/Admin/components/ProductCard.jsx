import React, { useState } from "react";
import {
  Paper,
  Grid,
  Stack,
  TextField,
  TextareaAutosize,
  Box,
  Button,
  Chip,
  Card,
  CardMedia,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import BaseCard from "../components/ProductCardComponents/BaseCard";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#1565C0", // Brighter blue
    },
    secondary: {
      main: "#004080", // Darker blue
    },
  },
});

function ProductCard() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    productName: "Spider Man T-Shirt",
    productDescription: "A marvel fan should buy this cozy Spider-Man T-shirt",
    productTags: ["Fashion", "Menswear", "Marvel", "Spiderman"],
    productVariants: [
      {
        name: "Small",
        price: "250",
      },
      {
        name: "Medium",
        price: "300",
      },
      {
        name: "Large",
        price: "500",
      },
    ],
    productImages: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  });

  const [tagDialogOpen, setTagDialogOpen] = useState(false);
  const [variantDialogOpen, setVariantDialogOpen] = useState(false);
  const [newTag, setNewTag] = useState("");
  const [newVariant, setNewVariant] = useState({ name: "", price: "" });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Add logic to update product information in your state or API.
    console.log("Save changes:", formData);
  };

  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleAddTag = () => {
    setTagDialogOpen(true);
  };

  const handleTagDialogClose = () => {
    setTagDialogOpen(false);
    setNewTag("");
  };

  const handleTagDialogSubmit = () => {
    if (newTag.trim() !== "") {
      setFormData((prevData) => ({
        ...prevData,
        productTags: [...prevData.productTags, newTag.trim()],
      }));
      setTagDialogOpen(false);
      setNewTag("");
    }
  };

  const handleRemoveTag = (index) => {
    setFormData((prevData) => {
      const updatedTags = [...prevData.productTags];
      updatedTags.splice(index, 1);
      return { ...prevData, productTags: updatedTags };
    });
  };

  const handleAddVariant = () => {
    setVariantDialogOpen(true);
  };

  const handleVariantDialogClose = () => {
    setVariantDialogOpen(false);
    setNewVariant({ name: "", price: "" });
  };

  const handleVariantDialogSubmit = () => {
    if (newVariant.name.trim() !== "" && newVariant.price.trim() !== "") {
      setFormData((prevData) => ({
        ...prevData,
        productVariants: [...prevData.productVariants, { ...newVariant }],
      }));
      setVariantDialogOpen(false);
      setNewVariant({ name: "", price: "" });
    }
  };

  const handleRemoveVariant = (index) => {
    setFormData((prevData) => {
      const updatedVariants = [...prevData.productVariants];
      updatedVariants.splice(index, 1);
      return { ...prevData, productVariants: updatedVariants };
    });
  };

  const handleAddImage = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        productImages: [
          ...prevData.productImages,
          URL.createObjectURL(files[0]),
        ],
      }));
    }
  };

  const handleRemoveImage = (index) => {
    setFormData((prevData) => {
      const updatedImages = [...prevData.productImages];
      updatedImages.splice(index, 1);
      return { ...prevData, productImages: updatedImages };
    });
  };

  function generateAddImageButton(index) {
    const inputId = `image-input-${index}`;
    return (
      <label key={`label-${index}`} htmlFor={inputId}>
        <Button
          component="div"
          color="primary"
          variant="outlined"
          sx={{
            borderRadius: "4px",
            backgroundColor: "#e3f2fd", // Lighter blue background
            fontSize: "14px", // Adjusted font size
          }}
        >
          Add Image
        </Button>
      </label>
    );
  }

  function generateImageInput(index) {
    const inputId = `image-input-${index}`;
    return (
      <input
        key={`input-${index}`}
        id={inputId}
        type="file"
        accept="image/*"
        onChange={(e) => handleImageChange(e, index)}
        style={{ display: "none" }}
      />
    );
  }

  return (
    <ThemeProvider theme={customTheme}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
          <BaseCard title="Product Information">
            <>
              <Stack spacing={3}>
                <TextField
                  id="product-name"
                  label="Product Name"
                  variant="outlined"
                  value={formData.productName}
                  onChange={(e) => handleChange("productName", e.target.value)}
                  disabled={!isEditing}
                />
                <TextField
                  id="product-description"
                  label="Product Description"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={formData.productDescription}
                  onChange={(e) =>
                    handleChange("productDescription", e.target.value)
                  }
                  disabled={!isEditing}
                />
                <Stack flexDirection={"row"}>
                  {formData.productTags.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      onDelete={() => handleRemoveTag(index)}
                      variant="outlined"
                      color="primary"
                      sx={{
                        cursor: "pointer",
                        marginRight: 1,
                        borderRadius: "4px",
                        backgroundColor: "#e3f2fd", // Lighter blue background
                        fontSize: "14px", // Adjusted font size
                      }}
                    />
                  ))}
                  {isEditing && (
                    <Button
                      onClick={handleAddTag}
                      color="primary"
                      variant="outlined"
                      sx={{
                        borderRadius: "4px",
                        backgroundColor: "#e3f2fd", // Lighter blue background
                        fontSize: "14px", // Adjusted font size
                      }}
                    >
                      Add Tag
                    </Button>
                  )}
                </Stack>
                <Stack spacing={2}>
                  {formData.productVariants.map((variant, index) => (
                    <Stack
                      direction="row"
                      alignItems="center"
                      key={index}
                      spacing={1}
                    >
                      <TextField
                        label="Variant Name"
                        variant="outlined"
                        value={variant.name}
                        onChange={(e) =>
                          handleChange(
                            `productVariants[${index}].name`,
                            e.target.value
                          )
                        }
                        disabled={!isEditing}
                        sx={{ marginRight: 1 }}
                      />
                      <TextField
                        label="Variant Price"
                        variant="outlined"
                        value={variant.price}
                        onChange={(e) =>
                          handleChange(
                            `productVariants[${index}].price`,
                            e.target.value
                          )
                        }
                        disabled={!isEditing}
                        sx={{ marginRight: 1 }}
                      />
                      {isEditing && (
                        <Button
                          onClick={() => handleRemoveVariant(index)}
                          color="error"
                          variant="outlined"
                          sx={{
                            borderRadius: "4px",
                            backgroundColor: "#ffcdd2", // Lighter red background
                            fontSize: "14px", // Adjusted font size
                          }}
                        >
                          Remove
                        </Button>
                      )}
                    </Stack>
                  ))}
                  {isEditing && (
                    <Button
                      onClick={handleAddVariant}
                      color="primary"
                      variant="outlined"
                      sx={{
                        borderRadius: "4px",
                        backgroundColor: "#e3f2fd", // Lighter blue background
                        fontSize: "14px", // Adjusted font size
                      }}
                    >
                      Add Variant
                    </Button>
                  )}
                </Stack>
                <Stack spacing={2}>
                  <Typography variant="h6" gutterBottom>
                    Product Images
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    {formData.productImages.map((image, index) => (
                      <React.Fragment key={index}>
                        <Card sx={{ position: "relative", maxWidth: 120 }}>
                          <CardMedia
                            component="img"
                            alt={`Image ${index + 1}`}
                            height="80"
                            width="120"
                            image={image}
                          />
                          {isEditing && (
                            <Box
                              sx={{
                                position: "absolute",
                                top: 2,
                                right: 2,
                                zIndex: 1,
                              }}
                            >
                              <Button
                                variant="outlined"
                                color="error"
                                onClick={() => handleRemoveImage(index)}
                                sx={{
                                  borderRadius: "0",
                                }}
                              >
                                Remove
                              </Button>
                            </Box>
                          )}
                        </Card>
                      </React.Fragment>
                    ))}
                    {isEditing && (
                      <>
                        <label htmlFor="image-input">
                          <Button
                            component="div"
                            color="primary"
                            variant="outlined"
                            sx={{
                              borderRadius: "4px",
                              backgroundColor: "#e3f2fd", // Lighter blue background
                              fontSize: "14px", // Adjusted font size
                            }}
                          >
                            Add Image
                          </Button>
                        </label>
                        <input
                          id="image-input"
                          type="file"
                          accept="image/*"
                          onChange={handleAddImage}
                          style={{ display: "none" }}
                        />
                      </>
                    )}
                  </Stack>
                </Stack>
              </Stack>
              <br />
              {isEditing ? (
                <Button
                  onClick={handleSave}
                  variant="contained"
                  color="primary"
                >
                  Save
                </Button>
              ) : (
                <Button onClick={handleEdit} variant="outlined" color="primary">
                  Edit
                </Button>
              )}
            </>
          </BaseCard>
        </Grid>
      </Grid>

      {/* Tag Dialog */}
      <Dialog open={tagDialogOpen} onClose={handleTagDialogClose}>
        <DialogTitle>Add Tag</DialogTitle>
        <DialogContent>
          <TextField
            label="Tag Name"
            variant="outlined"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleTagDialogClose}>Cancel</Button>
          <Button onClick={handleTagDialogSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>

      {/* Variant Dialog */}
      <Dialog open={variantDialogOpen} onClose={handleVariantDialogClose}>
        <DialogTitle>Add Variant</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <TextField
              label="Variant Name"
              variant="outlined"
              value={newVariant.name}
              onChange={(e) =>
                setNewVariant((prevVariant) => ({
                  ...prevVariant,
                  name: e.target.value,
                }))
              }
            />
            <TextField
              label="Variant Price"
              variant="outlined"
              value={newVariant.price}
              onChange={(e) =>
                setNewVariant((prevVariant) => ({
                  ...prevVariant,
                  price: e.target.value,
                }))
              }
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleVariantDialogClose}>Cancel</Button>
          <Button onClick={handleVariantDialogSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}

export default ProductCard;
