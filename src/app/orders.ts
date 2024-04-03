export interface Orders {
    id: number;
    productId: number;
    quantity: number;
    subscriptionType: string;
    startDate: string; // Assuming dates are represented as strings from the backend
    endDate: string;
    numDays?: number;  // Optional property for number of days
    totalPrice?: number; // Optional property for total cost
}
