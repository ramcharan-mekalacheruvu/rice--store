import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Button from "../../common/Button/Button";

import {
    createProduct,
    updateProduct,
} from "../../../services/productService";

import { getCategories } from "../../../services/categoryService";

import "./ProductForm.css";

export default function ProductForm({
    product,
    onSuccess,
}) {
    const editing = Boolean(product);

    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [preview, setPreview] = useState(product?.image || "");

    const [form, setForm] = useState({
        name: product?.name || "",
        description: product?.description || "",
        price: product?.price || "",
        stock: product?.stock || "",
        category: product?.category || "",
        is_available: product?.is_available ?? true,
        image: null,
    });

    useEffect(() => {
        loadCategories();
    }, []);

    async function loadCategories() {
        try {
            const res = await getCategories();
            setCategories(res.data.results || res.data || []);
        } catch {
            toast.error("Unable to load categories.");
        }
    }

    function handleChange(e) {
        const { name, value, type, checked } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    function handleImage(e) {
        const file = e.target.files[0];

        if (!file) return;

        setPreview(URL.createObjectURL(file));

        setForm((prev) => ({
            ...prev,
            image: file,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        const data = new FormData();

        Object.keys(form).forEach((key) => {
            if (form[key] !== null && form[key] !== "") {
                if (key === "category") {
                    data.append("category_id", form[key]);
                } else {
                    data.append(key, form[key]);
                }
            }
        });

        try {
            if (editing) {
                // Using slug because Django ViewSet uses lookup_field = "slug"
                await updateProduct(product.slug, data);

                toast.success("Product updated successfully");
            } else {
                await createProduct(data);

                toast.success("Product created successfully");
            }

            onSuccess();
        } catch (error) {
            console.error(
                "Save product error:",
                error.response?.status,
                error.response?.data
            );

            toast.error(
                error.response?.data?.detail ||
                "Unable to save product."
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-6">
                    <label className="form-label">Name</label>
                    <input
                        className="form-control"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Category</label>
                    <select
                        className="form-select"
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Category</option>

                        {categories.map((cat) => (
                            <option
                                key={cat.id}
                                value={cat.id}
                            >
                                {cat.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="mt-3">
                <label className="form-label">Description</label>
                <textarea
                    className="form-control"
                    rows="4"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                />
            </div>

            <div className="row mt-3">
                <div className="col-md-4">
                    <label className="form-label">Price</label>
                    <input
                        type="number"
                        className="form-control"
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="col-md-4">
                    <label className="form-label">Stock</label>
                    <input
                        type="number"
                        className="form-control"
                        name="stock"
                        value={form.stock}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="col-md-4">
                    <label className="form-label">Image</label>
                    <input
                        type="file"
                        className="form-control"
                        accept="image/*"
                        onChange={handleImage}
                    />
                </div>
            </div>

            {preview && (
                <div className="text-center mt-4">
                    <img
                        src={preview}
                        alt="Preview"
                        className="preview-image"
                    />
                </div>
            )}

            <div className="form-check mt-4">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="is_available"
                    name="is_available"
                    checked={form.is_available}
                    onChange={handleChange}
                />

                <label
                    className="form-check-label"
                    htmlFor="is_available"
                >
                    Available
                </label>
            </div>

            <div className="mt-4">
                <Button
                    loading={loading}
                    type="submit"
                >
                    {editing
                        ? "Update Product"
                        : "Create Product"}
                </Button>
            </div>
        </form>
    );
}