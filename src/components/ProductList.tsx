import React from "react";

interface ProductListProps {
    pageData: {
        id: number,
        name: string,
        year: number,
        color: string,
        pantone_value: string
    }[];
    filteredData: {
        id: number,
        name: string,
        year: number,
        color: string,
        pantone_value: string
    }[];
    isDataFiltered: boolean;
    modalOpen: ({}) => void;
}

const ProductList: React.FC<ProductListProps> = props => {

    const showRegularPageData = (
        <table>
            {props.pageData.map((item, key) =>
                <tr key={item.id}
                    style={{background: item.color}}
                    onClick={() => props.modalOpen(item)}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.year}</td>
                </tr>
            )}
        </table>
    );

    // const showFilteredData = (
    //     <table>
    //         {props.filteredData.map((item, key) =>
    //             <tr key={item.id}
    //                 style={{background: item.color}}
    //                 onClick={() => props.modalOpen(item)}>
    //                 <td>{item.id}</td>
    //                 <td>{item.name}</td>
    //                 <td>{item.year}</td>
    //             </tr>
    //         )}
    //     </table>
    //)



    return (
        <>
            <div>
                {/*{props.isDataFiltered ? showFilteredData : showRegularPageData}*/}
                {showRegularPageData}
            </div>

        </>
    )
}

export default ProductList;