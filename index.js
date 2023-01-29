const $task = document.querySelector('#item')
const $btnAdd = document.querySelector('#btn-add')
const $todos = document.querySelector('#todos')

document.addEventListener('DOMContentLoaded', () => {
    let removeSVG = `<img src="./icons/trash.png">`
    let completeSVG = `<img src="./icons/tick.png">`

    /* event that listen when click icon + this add the item to todo list*/
    $btnAdd.addEventListener('click', () => {
        let newItem = document.getElementById('item').value

        if (newItem) {
            addItem(newItem)
            document.getElementById('item').value = ''
        }
    })

    /* event that listen when press the key enter add the item to todo list*/
    $task.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            let newItem = document.getElementById('item').value

            if (newItem) {
                addItem(newItem)
                document.getElementById('item').value = ''
            }
        }
    })

    /* function that add item to todo list*/
    function addItem(text) {
        let list = document.getElementById('todos')
        let item = document.createElement('a')

        item.innerText = text


        list.insertBefore(item, list.childNodes[0])

        let buttons = document.createElement('div')
        buttons.classList.add('buttons')

        let remove = document.createElement('button')
        remove.classList.add('remove')
        remove.innerHTML = removeSVG

        remove.addEventListener('click', removeItem)

        let complete = document.createElement('button')
        complete.classList.add('complete')
        complete.innerHTML = completeSVG

        complete.addEventListener('click', completeItem)

        buttons.appendChild(remove)
        buttons.appendChild(complete)

        item.appendChild(buttons)

        list.insertBefore(item, list.childNodes[0])
    }

    /* function that remove item of todo list */
    function removeItem() {
        let item = this.parentNode.parentNode

        let parent = item.parentNode

        parent.removeChild(item)

    }

    /* function that add item to completed list */
    function completeItem() {
        let item = this.parentNode.parentNode

        let parent = item.parentNode
        let id = parent.id

        let target = id === 'todos' ? document.getElementById('completed') : document.getElementById('todos')

        parent.removeChild(item)

        target.insertBefore(item, target.childNodes[0])
    }

})

