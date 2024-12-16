export const formatDate = (date) => {
    return new Date(date).toISOString().slice(0, 19).replace("T", " ");
};
export const generateOrderNumber = () => {
    const timestamp = Date.now().toString();
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `ORD-${timestamp}-${random}`;
};
