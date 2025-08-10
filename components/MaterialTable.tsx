'use client';
import React, { useState } from 'react';

type Material = {
    id: number;
    name: string;
    uom: string;
    amount: number;
};

type Row = {
    id: number;
    materialId: string;
    uom: string;
    quantity: string;
    amount: string;
};

const materialsList: Material[] = [
    { id: 1, name: 'Johnsie Jock', uom: 'Bags', amount: 500 },
    { id: 2, name: 'Teeth', uom: 'Pieces', amount: 10 },
    { id: 3, name: 'Root Canal', uom: 'Kg', amount: 120 },
];

const MaterialTable = () => {
    
    const [rows, setRows] = useState<Row[]>([
        {
            id: Date.now(),
            materialId: '',
            uom: '',
            quantity: '22',
            amount: '',
        },
    ]);

    const handleAddRow = () => {
        setRows([
            ...rows,
            {
                id: Date.now(),
                materialId: '',
                uom: '',
                quantity: '22',
                amount: '',
            },
        ]);
    };

    const handleRemoveRow = (id: number) => {
        setRows(rows.filter((row) => row.id !== id));
    };

    const handleChange = (
  index: number,
  field: keyof Row,
  value: string
) => {
  const updatedRows = [...rows];

  if (field === 'materialId') {
    const selectedMaterial = materialsList.find(
      (material) => material.id.toString() === value
    );

    if (selectedMaterial) {
      updatedRows[index] = {
        ...updatedRows[index],
        materialId: selectedMaterial.id.toString(),
        uom: selectedMaterial.uom,
        amount: selectedMaterial.amount.toString(),
      };
    } else {
      updatedRows[index] = {
        ...updatedRows[index],
        materialId: '',
        uom: '',
        amount: '',
      };
    }
  } else if (field !== 'id') {
    updatedRows[index] = {
      ...updatedRows[index],
      [field]: value,
    };
  }

  setRows(updatedRows);
};



    // const handleChange = (
    //     index: number,
    //     field: keyof Row,
    //     value: string
    // ) => {
    //     const updatedRows = [...rows];

    //     if (field === 'materialId') {
    //         const selectedMaterial = materialsList.find(
    //             (material) => material.id.toString() === value
    //         );

    //         if (selectedMaterial) {
    //             updatedRows[index] = {
    //                 ...updatedRows[index],
    //                 materialId: selectedMaterial.id.toString(),
    //                 uom: selectedMaterial.uom,
    //                 amount: selectedMaterial.amount.toString(),
    //             };
    //         } else {
    //             updatedRows[index] = {
    //                 ...updatedRows[index],
    //                 materialId: '',
    //                 uom: '',
    //                 amount: '',
    //             };
    //         }
    //     } else {
    //         updatedRows[index][field] = value;
    //     }

    //     setRows(updatedRows);
    // };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full">
                <thead className="bg-gray-50 sticky top-0">
                    <tr>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            Material Name
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            UOM
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            Quantity
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            Amount
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.6248 11.6249H12.3748M11.6248 12.3749H12.3748M11.6248 4.62494H12.3748M11.6248 5.37494H12.3748M11.6248 18.6249H12.3748M11.6248 19.3749H12.3748M4.62476 11.6249H5.37476M4.62476 12.3749H5.37476M4.62476 4.62494H5.37476M4.62476 5.37494H5.37476M4.62476 18.6249H5.37476M4.62476 19.3749H5.37476M18.6248 11.6249H19.3748M18.6248 12.3749H19.3748M18.6248 4.62494H19.3748M18.6248 5.37494H19.3748M18.6248 18.6249H19.3748M18.6248 19.3749H19.3748M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5ZM13 19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19C11 18.4477 11.4477 18 12 18C12.5523 18 13 18.4477 13 19ZM6 12C6 12.5523 5.55229 13 5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11C5.55229 11 6 11.4477 6 12ZM6 5C6 5.55228 5.55229 6 5 6C4.44772 6 4 5.55228 4 5C4 4.44772 4.44772 4 5 4C5.55229 4 6 4.44772 6 5ZM6 19C6 19.5523 5.55229 20 5 20C4.44772 20 4 19.5523 4 19C4 18.4477 4.44772 18 5 18C5.55229 18 6 18.4477 6 19ZM20 12C20 12.5523 19.5523 13 19 13C18.4477 13 18 12.5523 18 12C18 11.4477 18.4477 11 19 11C19.5523 11 20 11.4477 20 12ZM20 5C20 5.55228 19.5523 6 19 6C18.4477 6 18 5.55228 18 5C18 4.44772 18.4477 4 19 4C19.5523 4 20 4.44772 20 5ZM20 19C20 19.5523 19.5523 20 19 20C18.4477 20 18 19.5523 18 19C18 18.4477 18.4477 18 19 18C19.5523 18 20 18.4477 20 19Z" stroke="#144A6C" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-[#EAECF0]">
                    {rows.map((row, index) => (
                        <tr key={row.id}>
                            {/* Material Dropdown */}
                            <td className="px-6 py-4">
                                <select
                                    className="border border-[#fff] rounded px-2 py-1 w-full"
                                    value={row.materialId}
                                    onChange={(e) =>
                                        handleChange(index, 'materialId', e.target.value)
                                    }
                                >
                                    {materialsList.map((material) => (
                                        <option key={material.id} value={material.id}>
                                            {material.name}
                                        </option>
                                    ))}
                                </select>
                            </td>

                            {/* UOM - Show default text if empty */}
                            <td className="px-6 py-4 text-sm text-[#475467]">
                                {row.uom || 'Square'}
                            </td>

                            {/* Quantity Input */}
                            <td className="px-6 py-4">
                                <input
                                    type="number"
                                    className="border border-[#fff] px-2 py-2 text-sm text-[#475467]"
                                    value={row.quantity}
                                    onChange={(e) =>
                                        handleChange(index, 'quantity', e.target.value)
                                    }
                                />
                            </td>

                            {/* Amount - Show default text if empty */}
                            <td className="px-6 py-4 text-sm text-[#475467]">
                                {row.amount || '$169.43'}
                            </td>

                            {/* Remove Button */}
                            <td className="px-6 py-4 text-right">
                                <button
                                    type="button"
                                    onClick={() => handleRemoveRow(row.id)}
                                    className="text-red-600 hover:text-red-800 text-sm"
                                >

                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.318 16.5324L18.068 16.5391L17.318 16.5324ZM3.6665 4.74967C3.25229 4.74967 2.9165 5.08546 2.9165 5.49967C2.9165 5.91389 3.25229 6.24967 3.6665 6.24967V4.74967ZM18.3332 6.24967C18.7474 6.24967 19.0832 5.91389 19.0832 5.49967C19.0832 5.08546 18.7474 4.74967 18.3332 4.74967V6.24967ZM9.9165 9.16634C9.9165 8.75213 9.58072 8.41634 9.1665 8.41634C8.75229 8.41634 8.4165 8.75213 8.4165 9.16634H9.9165ZM8.4165 16.4997C8.4165 16.9139 8.75229 17.2497 9.1665 17.2497C9.58072 17.2497 9.9165 16.9139 9.9165 16.4997H8.4165ZM13.5832 9.16634C13.5832 8.75213 13.2474 8.41634 12.8332 8.41634C12.419 8.41634 12.0832 8.75213 12.0832 9.16634H13.5832ZM12.0832 16.4997C12.0832 16.9139 12.419 17.2497 12.8332 17.2497C13.2474 17.2497 13.5832 16.9139 13.5832 16.4997H12.0832ZM17.4165 5.49967L16.6665 5.49298L16.568 16.5257L17.318 16.5324L18.068 16.5391L18.1665 5.50637L17.4165 5.49967ZM13.6515 20.1663V19.4163H8.24984V20.1663V20.9163H13.6515V20.1663ZM4.58317 5.49967H3.83317V16.4997H4.58317H5.33317V5.49967H4.58317ZM3.6665 5.49967V6.24967H4.58317V5.49967V4.74967H3.6665V5.49967ZM4.58317 5.49967V6.24967H7.33317V5.49967V4.74967H4.58317V5.49967ZM7.33317 5.49967V6.24967H14.6665V5.49967V4.74967H7.33317V5.49967ZM14.6665 5.49967V6.24967H17.4165V5.49967V4.74967H14.6665V5.49967ZM17.4165 5.49967V6.24967H18.3332V5.49967V4.74967H17.4165V5.49967ZM7.33317 5.09227H8.08317C8.08317 3.78705 9.30352 2.58301 10.9998 2.58301V1.83301V1.08301C8.64607 1.08301 6.58317 2.79741 6.58317 5.09227H7.33317ZM10.9998 1.83301V2.58301C12.6962 2.58301 13.9165 3.78705 13.9165 5.09227H14.6665H15.4165C15.4165 2.79741 13.3536 1.08301 10.9998 1.08301V1.83301ZM7.33317 5.09227H6.58317V5.49967H7.33317H8.08317V5.09227H7.33317ZM14.6665 5.09227H13.9165V5.49967H14.6665H15.4165V5.09227H14.6665ZM8.24984 20.1663V19.4163C6.63901 19.4163 5.33317 18.1105 5.33317 16.4997H4.58317H3.83317C3.83317 18.9389 5.81058 20.9163 8.24984 20.9163V20.1663ZM17.318 16.5324L16.568 16.5257C16.5537 18.1263 15.2521 19.4163 13.6515 19.4163V20.1663V20.9163C16.0753 20.9163 18.0463 18.9629 18.068 16.5391L17.318 16.5324ZM9.1665 9.16634H8.4165V16.4997H9.1665H9.9165V9.16634H9.1665ZM12.8332 9.16634H12.0832V16.4997H12.8332H13.5832V9.16634H12.8332Z" fill="#EF2D2D" />
                                    </svg>

                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="mt-5">
                <button
                    type="button"
                    onClick={handleAddRow}
                    className="bg-[#fff] border border-[#D0D5DD] shadow-md text-[#667085] px-4 py-2 rounded-lg flex"
                >

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12H18" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                        <path d="M12 18V6" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                    </svg>
                    Add Material
                </button>
            </div>
        </div>
    );
};

export default MaterialTable;
