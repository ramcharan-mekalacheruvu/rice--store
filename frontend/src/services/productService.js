import api from "./api";

export const getProducts = (params = {}) => {
    return api.get("products/", { params });
};

export const getProduct = (slug) => {
    return api.get(`products/${slug}/`);
};

export const getProductBySlug = (slug) => {
    return api.get(`products/${slug}/`);
};

export const createProduct = (data) => {
    return api.post("products/", data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export const updateProduct = (slug, data) => {
    return api.put(`products/${slug}/`, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export const deleteProduct = (slug) => {
    return api.delete(`products/${slug}/`);
};