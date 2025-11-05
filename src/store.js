export const initialStore = () => {
  return {
    contactos: [],
    img: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

      case 'set_contactos':
        return {
          ...store,
          contactos: action.payload
        }
        
    default:
      throw Error('Unknown action.');
  }
}
