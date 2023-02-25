import React from 'react' // nạp thư viện react
// import ReactDOM from 'react-dom' // nạp thư viện react-dom
import { createRoot } from 'react-dom/client'

// Tạo component App
// function App() {
//     return (
//         <div>
//             {/* <h1>This is a book store front-end</h1> */}
//         </div>
//     )
// }

// Render component App vào #root element
createRoot(document.getElementById('root')).render(<h1>This is a book store frontend</h1>)
