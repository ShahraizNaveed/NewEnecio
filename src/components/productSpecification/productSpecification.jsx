import React from 'react'
import "./ProductSpecification.css"
import DataTable from 'react-data-table-component'
import specification from "../../assets/images/productPage/singleProduct/bullet.png"
import { Container } from 'react-bootstrap'

const customStyles = {
    headRow: {
        style: {
            backgroundColor: "#F3BC00",
            color: "black"
        }
    },
    headCells: {
        style: {
            fontSize: "16px",
            fontWeight: "600",
            textTransform: "uppercase",
        }
    },
    cells: {
        style: {
            fontSize: "15px",
            // backgroundColor: "#F2F2F2"
        }
    }
}


const ProductSpecification = () => {

    const columns = [
        {
            name: "Models",
            selector: row => row.model,
            sortable: true
        },
        {
            name: "Max Lifting Capacity",
            selector: row => row.liftingCapacity,
            sortable: true
        },
        {
            name: "Max Loading Capacity",
            selector: row => row.loadingCapacity,
            sortable: true
        },
        {
            name: "Max Lifting Height",
            selector: row => row.maxHeight,
            sortable: true
        }
    ]

    const data = [
        {
            id: 1,
            model: "SRSC1009-6E",
            liftingCapacity: "12 T",
            loadingCapacity: "28.1 m",
            maxHeight: "28.5 m"
        },
        {
            id: 2,
            model: "SRSC1009-6E",
            liftingCapacity: "12 T",
            loadingCapacity: "28.1 m",
            maxHeight: "28.5 m"
        },
        {
            id: 3,
            model: "SRSC1009-6E",
            liftingCapacity: "12 T",
            loadingCapacity: "28.1 m",
            maxHeight: "28.5 m"
        },
        {
            id: 4,
            model: "SRSC1009-6E",
            liftingCapacity: "12 T",
            loadingCapacity: "28.1 m",
            maxHeight: "28.5 m"
        },
    ]

    return (
        <>
            <h2 className='text-center feature-heading'>
                <img src={specification} alt="" className='img-fluid mx-4' />
                Specification
            </h2>
            <section>
                <div>
                    <Container>
                        <DataTable
                            columns={columns}
                            data={data}
                            highlightOnHover
                            customStyles={customStyles}
                        >
                        </DataTable>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default ProductSpecification