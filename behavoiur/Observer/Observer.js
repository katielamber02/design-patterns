|// зависимость один ко многим
// есть обьект в которым мы можем треггерить изминения
// другие обьекты, которые подписанны на изминения,
// получают обновления и делают свой функционал


// Pablisher / Subscriber / Dispatcher / Observer / Listener


class Subject {
  constructor() {
    this.observers = []
  }

  subscribe(observer) { // observer это функция-class с методом update
    this.observers.push(observer) // []
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer) // delete in []
  }

  fire(action) {
    this.observers.forEach(observer => {
      observer.update(action) // action is changes
    })
   
  
  }
}

class Observer {
  constructor(state = 1) {
    this.state = state
    this.initialState = state // чтобы была возможность вернуться к изначальному значению
  }

  update(action) {
    switch (action.type) {
      case 'INCREMENT':
        this.state = ++this.state
        break
      case 'DECREMENT':
        this.state = --this.state
        break
      case 'ADD':
        this.state += action.payload
        break
      default:

      // можно и ретурн но в данном случае надо поменять локальный стеэт
        this.state = this.initialState
    }
  }
}

const stream$ = new Subject() // $ RxJS as async dynamic

const obs1 = new Observer()
const obs2 = new Observer(42)

stream$.subscribe(obs1)
stream$.subscribe(obs2)

console.log(obs1.state) // 1
console.log(obs2.state) // 42

stream$.fire({type: 'INCREMENT'})
stream$.fire({type: 'INCREMENT'})
stream$.fire({type: 'DECREMENT'})
stream$.fire({type: 'ADD', payload: 10}) // dispatch 
// одного события сразу изменяет все подписки

console.log(obs1.state)
console.log(obs2.state)