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

export function Test1({ props1, props2, content, callback }) {
    console.log(`${props1}, ${props2}, ${content}`)
    return (
        <div>
            <ul>
                <li>"props1:"" {props1}</li>
                <li>"props2:"" {props2}</li>
                <li>"props1:"" {content}</li>
            </ul>
            <button>{content}</button>
            {callback()}
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

//-------------------------------------------------------------------------------------------------------------
// 3. rest, spread với nhiều props

export function MultiProps({ ...multiprops }) { //ta dùng rest ở đây, multiprops là tập hợp các props
    console.log({ ...multiprops }) //Spread
    return (
        <div>
            <input {...multiprops} /> {/* spread ở đây*/}
        </div>
    )
}