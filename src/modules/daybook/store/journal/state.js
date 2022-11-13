
export default () => ({
    isLoading: true,
    entries: [
    {
        id: new Date().getTime(),
        date: new Date().toDateString,
        text: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, earum asperiores amet vel enim harum dolores ea consequatur, impedit rerum commodi nihil labore repellat ex architecto fugiat, numquam dolor et?',
        picture: null
    },
    {
        id: new Date().getTime() + 1000,
        date: new Date().toDateString,
        text: 'sit amet consectetur adipisicing elit. Vitae, earum asperiores amet vel enim harum dolores ea consequatur, impedit rerum commodi nihil labore repellat ex architecto fugiat, numquam dolor et?',
        picture: null
    },
    {
        id: new Date().getTime() + 2000,
        date: new Date().toDateString,
        text: 'Vitae, earum asperiores amet vel enim harum dolores ea consequatur, impedit rerum commodi nihil labore repellat ex architecto fugiat, numquam dolor et?',
        picture: null
    },
    ]
})

