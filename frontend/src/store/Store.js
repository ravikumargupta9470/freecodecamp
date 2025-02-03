import { create } from "zustand";

export const useProductStore = create((set) => ({
    products: [],

    setProducts: (products) => set({ products }),

    createPro: async (newproduct) => {
        if (!newproduct.name || !newproduct.image || !newproduct.price || !newproduct.desc) {
            return { success: false, message: "Fill all the data" };
        }

        try {
            const res = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/adddata`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newproduct),
            });

            if (!res.ok) {
                return { success: false, message: "Failed to insert data" };
            }

            const data = await res.json();
            set((state) => ({ products: [...state.products, data.data] }));

            return { success: true, message: "Data inserted successfully" };
        } catch (error) {
            return { success: false, message: "Server error, try again later" };
        }
    }
    ,
    fetchproducts: async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/getall`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (!res.ok) {
                console.error("Failed to fetch products");
                return;
            }

            const datta = await res.json();
            // console.log("Fetched Data:", datta);

            set({ products: datta.data }); // Ensure you are using the correct field


        } catch (error) {
            console.error("Error fetching products:", error);
        }
    },
    deleteproduct: async (pid) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/delete/${pid}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!res.ok) {
                return { success: false, message: "Data failed to delete" };
            }


            const data = await res.json();
            if (data.success) {
                set((state) => ({
                    products: state.products.filter((product) => product._id !== pid)
                }));
                return { success: true, message: "Deleted successfully" };
            } else {
                return { success: false, message: "Data deletion failed" };
            }
        } catch (error) {
            console.error("Error deleting product:", error);
            return { success: false, message: "Server error" };
        }
    }




}));
