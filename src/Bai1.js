import './index.css'
const courses = [
    {
        name: "HTML, CSS"
    },
    {
        name: "Reponsive Web Design"
    },
    {
        name: "ReactJS"
    }
]

const renderArr = courses.map((ele, index) => {
    return <li key={index}> {ele.name} </li>
})
export function Test({ props1, props2, props3 }) {
    console.log(props1)  // tương đương props.props1
    console.log(props2)  // tương đương props.props2
    console.log(props3)  // tương đương props.props3
    return (
        <div>
            <ul>
                Props gồm các thuộc tính props1, props2, props3 có các giá trị là:
                {props1}, {props2}, {props3}

                {renderArr}</ul>

        </div>
    )


}

//------------------------------------------------------------------------------------------------------------
//2. Component từ phương thức của một object
export const Form = {
    Input() {
        return <input placeholder="Input from method obj" />
    },
    Checkbox() {
        return <input type="checkbox" />
    }

}