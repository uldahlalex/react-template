export default function Solutions() {


    function Exercise1() {
        const myVariable = "hey";
        return <>{myVariable}</>
    }

    function Exercise2() {
        const myVariable = "hey";
        return <>{myVariable.length > 2 ? {myVariable} : null}</>
    }

    function Exercise3() {
        function NestedComponent() {
            return (<>This is nested</>)
        }
        return(<>
            outside component
            <NestedComponent />
        </>)
    }

    function Exercise4() {
        const myVariable = "hey";
        return(<>
            {
                [0,1,2].forEach(e => {myVariable})
            }
        </>)
    }


    return (<>
        <Exercise1 />
        <Exercise2 />
        <Exercise3 />
        <Exercise4 />
    </>)
}