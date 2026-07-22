import { FaEye } from "react-icons/fa";

export default function CustomerRow({

    customer,

    onView,

}){

    return(

        <tr>

            <td>

                {customer.full_name}

            </td>

            <td>

                {customer.phone}

            </td>

            <td>

                {customer.total_orders}

            </td>

            <td>

                ₹{customer.total_spent}

            </td>

            <td>

                {

                    new Date(

                        customer.date_joined

                    ).toLocaleDateString()

                }

            </td>

            <td>

                <button

                    className="btn btn-light"

                    onClick={()=>

                        onView(customer)

                    }

                >

                    <FaEye/>

                </button>

            </td>

        </tr>

    );

}