import Button from "../../common/Button/Button";

export default function DeleteProductModal({

    product,

    onDelete,

    onClose,

}){

    return(

        <div className="modal show d-block">

            <div className="modal-dialog">

                <div className="modal-content">

                    <div className="modal-header">

                        <h5>

                            Delete Product

                        </h5>

                    </div>

                    <div className="modal-body">

                        Are you sure you want to delete

                        <strong>

                            {" "}

                            {product.name}

                        </strong>

                        ?

                    </div>

                    <div className="modal-footer">

                        <button

                            className="btn btn-secondary"

                            onClick={onClose}

                        >

                            Cancel

                        </button>

                        <Button

                            onClick={onDelete}

                        >

                            Delete

                        </Button>

                    </div>

                </div>

            </div>

        </div>

    );

}