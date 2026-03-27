import CryptoJS from "crypto-js";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function EsewaForm() {
    const { amount } = useParams();

    const amountValue = Number(amount);
    const tax_amount = 10;
    const total_amount = amountValue + tax_amount;

    const transaction_uuid = Date.now().toString();
    const product_code = "EPAYTEST";

    const message = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`;

    const signature = CryptoJS.enc.Base64.stringify(
        CryptoJS.HmacSHA256(message, "8gBm/:&EnhH.1/q")
    );

    return (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br py-12 px-4">
                
                <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-lg w-full animate-fadeIn">
                    <h2 className="text-3xl font-extrabold text-green-700 text-center mb-6">
                        Complete Your Payment
                    </h2>
                    {/* <p className="text-center text-gray-600 mb-6">
                        You are paying for <span className="font-semibold">{product_code}</span>
                    </p> */}

                    <form
                        action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
                        method="POST"
                        className="space-y-4"
                    >
                        {/* Amounts */}
                        <div className="flex justify-between items-center bg-green-50 rounded-xl p-4 shadow-inner">
                            <span className="text-gray-700 font-medium">Amount:</span>
                            <span className="text-green-700 font-bold">Rs. {amountValue}</span>
                        </div>

                        <div className="flex justify-between items-center bg-green-50 rounded-xl p-4 shadow-inner">
                            <span className="text-gray-700 font-medium">Tax:</span>
                            <span className="text-green-700 font-bold">Rs. {tax_amount}</span>
                        </div>

                        <div className="flex justify-between items-center bg-green-100 rounded-xl p-4 shadow-md border-2 border-green-200">
                            <span className="text-gray-800 font-semibold text-lg">Total Amount:</span>
                            <span className="text-green-800 font-bold text-lg">Rs. {total_amount}</span>
                        </div>

                        {/* Hidden Inputs */}
                        <input type="hidden" name="amount" value={amountValue} />
                        <input type="hidden" name="tax_amount" value={tax_amount} />
                        <input type="hidden" name="total_amount" value={total_amount} />
                        <input type="hidden" name="transaction_uuid" value={transaction_uuid} />
                        <input type="hidden" name="product_code" value={product_code} />
                        <input type="hidden" name="product_service_charge" value="0" />
                        <input type="hidden" name="product_delivery_charge" value="0" />
                        <input type="hidden" name="success_url" value="https://developer.esewa.com.np/success" />
                        <input type="hidden" name="failure_url" value="https://developer.esewa.com.np/failure" />
                        <input type="hidden" name="signed_field_names" value="total_amount,transaction_uuid,product_code" />
                        <input type="hidden" name="signature" value={signature} />

                        <button
                            type="submit"
                            className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl shadow-lg transition transform hover:scale-105"
                        >
                            Pay Now with eSewa
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}