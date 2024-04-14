import React, { createContext, useState } from "react";

// Create the DateContext
export const DateContext = createContext([null, () => {}]);

// // Create a DateProvider component
// export const DateProvider = ({ children }) => {
//     // State to hold the current date
//     const [currentDate, setCurrentDate] = useState(new Date());

//     // Function to update the current date
//     const updateDate = () => {
//         setCurrentDate(new Date());
//     };

//     // Value object to be provided by the context
//     const dateContextValue = {
//         currentDate,
//         updateDate,
//     };

//     // Render the DateProvider with the provided value
//     return (
//         <DateContext.Provider value={dateContextValue}>
//             {children}
//         </DateContext.Provider>
//     );
// };
