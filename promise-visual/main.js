const marks = document.querySelectorAll('.marks > li')

async function translateOneByOne() {
    await moveElement(marks[0], { x: 20, y: 300 }).catch((e) =>
        console.log('something went wrong')
    )
    console.log('first element moved')

    await moveElement(marks[1], { x: 400, y: 300 }).catch((e) =>
        console.log('something went wrong')
    )
    console.log('second element moved')

    await moveElement(marks[2], { x: 400, y: 20 }).catch((e) =>
        console.log('something went wrong')
    )
    console.log('third element')

    // moveElement(marks[0], { x: 20, y: 300 }).then(() => {
    //     console.log('first element moved')
    //     moveElement(marks[1], { x: 400, y: 300 }).then(() => {
    //         console.log('second element moved')
    //         moveElement(marks[2], { x: 400, y: 20 }).then(() => {
    //             console.log('third element')
    //         })
    //     })
    // })
}

function translateAllAtOnce() {
    Promise.all([
        moveElement(marks[0], { x: 20, y: 300 }),
        moveElement(marks[1], { x: 400, y: 300 }),
        moveElement(marks[2], { x: 400, y: 20 }),
    ])
}

// translateOneByOne()
translateAllAtOnce()
