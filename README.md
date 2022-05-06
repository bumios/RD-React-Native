# React Native learning

---

## 1/ Cài đặt & Build project:

### 1.1/ Cài đặt:

#### Cài các phần bên dưới:

- JDK.

- NodeJS.

- VS Code.

- Android Studio (Để lấy simulator android)

- Xcode (Để lấy simulator iOS)



### 1.2/ Khởi tạo project:

- Mở terminal.

- Chạy lệnh cd và trỏ đến thư mục mình muốn tạo project.

- Chạy lệnh bên dưới để khởi tạo project.

```shell
npx react-native init ReactNativeLearning 
```



### 1.3/ Build project lên máy ảo

- Chạy lệnh `npx react-native run-<android/ios>` để build code hiện tại lên máy ảo

Example:

```shell
npx react-native run-android
```

*Notes:* (Windows) Tại máy ảo có thể ấn 2 lần phím `R` để reload lại simulator theo code mới nhất (Giống **Hot Reload**)



## 2/ Basic notes:

### 2.1/ Khởi tạo biến

| Keyword | Description                                                  |
| ------- | ------------------------------------------------------------ |
| var     | Khởi tạo 1 biến thông thường. Phạm vi được gọi có thể nằm ngoài block code |
| let     | Phạm vi chỉ nằm trong cùng block code, có thể thay đổi giá trị. |
| const   | Phạm vi chỉ nằm trong cùng block code, không thể thay đổi giá trị. |

Example:

```react
// Var
var a = "a"			// a sẽ có giá trị là "a", kiểu string
var a = 1			// a sẽ được ghi đè và có giá trị là 1, kiểu number

// Let
let b = "b"			// b sẽ có giá trị là "b", kiểu string
let b = "bb"		// Lỗi vì b đã được khai báo
b = 2			    // b sẽ có giá trị mới là 2, kiểu number

// Const
const c = "c"			// c sẽ có giá trị là "c", kiểu string
const c = "cc"			// Lỗi vì c đã được khai báo
c = 2				   // Lỗi luôn, giá trị chỉ được khởi tạo 1 lần và ko thể thay đổi.
```

### 2.2/ Kiểu dữ liệu

Ngoài string, number, boolean, date là các kiểu dữ liệu cơ bản ra còn có thêm object

#### 2.2.1/ Object

```react
var user = { name: "Duy", age: 26 };
console.log(user.name, user.age);			// Duy 26
```

*Check kiểu dữ liệu của biến sử dụng `typeof(variable)`*

#### 2.2.1/ Collections

- Arrays
- Set (Method: add, delete)
- Map (Gồm key & value, method: set, delete)

### 2.3/ Arrow Functions:

Nếu các function chỉ xử lý trong 1 hàm thì có thể dùng từ khóa => để khởi tạo nhanh 1 function.

Example:

```react
let myFunction = (a, b) => a + " " + b;
myFunction("duy", "tran")		// -> "duy tran"
```

### 2.4/ Class:

```react
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

let car = new Car();
let car2 = new Car("porsche", 2022);
```



### 2.5/ Hooks

### 2.5.1/ State Hook

Là 1 cách code giúp mình thay đổi / reload dữ liệu phía dưới local thông qua state, áp dụng cho function component.

#### 2.5.1.1/  Cách thức hoạt động:

```react
// 1: Tạo 1 hook
const [name, setName] = useState("Unknown");

// 2: Đọc giá trị

function greetingText() {
 return <h1>Welcome back, { name } !</h1>   
}

// 3: Cập nhật giá trị
function letChanged() {
    setName("Bum Bum");
    
    // Tương tự
    // this.setState({ name: "Bum Bum" });
}
```

Ở đoạn code trên:

`name`: Tên biến.
`setName`: Hàm để cập nhật giá trị của biến `name`.
`"Unknown"`: Là giá trị mặc định lúc khởi tạo.

#### 2.5.1.2/ Array destructing

Giải thích ý nghĩa của dấu [ ] ở trên, khi sử dụng `useState` nó sẽ trả về 1 mảng items, sử dụng index để truy cập tới phần tử khi đọc code sẽ dễ gây nhầm lẫn, nên mới có thuật ngữ `Array destructing` ở trên, cách code sẽ thay đổi thành `[name, setName]`.

```react
const [name, setName] = useState("Unknown");

// Tương tự với
var nameState = useState("Unknown");
var name = nameState[0];
var setName = nameState[1];
```

### 2.5.2/ Effect Hook

Dùng thông qua method useEffect(), vai trò của nó tương tự như 3 method trong class lifecycle gộp lại (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`).

*1 function có thể định nghĩa nhiều hàm useEffect bên trong.*

```react
function testEffectHook() {
    useEffect(() => {
        // Doing A
    });
    
    useEffect(() => {
        // Doing B
    });
}
```

Sử dụng useEffect tương ứng theo từng method life cycle của class

```react
function hookLifeCycle() {
    useEffect(() => {
    	console.log("Same with componentDidMount")
  	}, [])
    
    useEffect(() => {
    	console.log("Same with componentDidUpdate")
  	}, [someVariable])
    
    useEffect(() => {
        return () => {
    		console.log("Same with componentWillUnmount")            
        }
  	}, [])
}
```



Phương thức useEffect có 1 tham số dùng để check điều kiện, nếu điều kiện đó thay đổi thì mới xử lý thay đổi, giá trị sẽ được so sánh cả value & type (`===`)

```react
const [name, setName] = useState("Unknown");

function testEffectHook() {
    useEffect(() => {
        // XXX
    }, [name]);		// XXX chỉ được thực nếu giá trị biến name có sự thay đổi
}
```

### 2.6/ Life cycle:

#### 2.6.1/ `Constructor`

Hàm đầu tiên được gọi sau khi component được tạo ra, thường dùng để init state, binding các xử lý. (Được gọi trước khi component được chèn vào trong DOM)

```react
const MyComponent extends React.Component {
    constructor(props) {
        super(props)
        /// Doing something
    }
}
```

#### 2.6.2/ `getDerivedStateFromProps` (Ít khi sử dụng)

Hàm được gọi sau constructor, nhưng trước khi component được hiển thị. Hàm này nhận vào 2 tham số là props và state, và nó sẽ trả về 1 state mới để update.

```react
const MyComponent extends React.Component {
    state = {
        count: 0
    }
    
	static getDerivedStateFromProps(props, state) {
        // Trả về 1 state mới, với giá trị count được thay đổi thành 100
        // Nếu ko muốn update lại state ở đây thì có thể return null
        return {
			count: 100
		}
	}
}
```

#### 2.6.3/ `render`

Được gọi sau hàm `getDerivedStateFromProps`

`render` sẽ return về các react element để hiển thị lên browser.

```react
class MyComponent extends React.Component {
    render() {
        return <h1>Hello bae !</h1>;
    }
}
```

#### 2.6.4/ `componentDidMount`

Sau khi hàm render được gọi, component được hiển thị trên browser thì hàm này sẽ được gọi.

```react
class MyComponent extends React.Component {
    componentDidMount() {
        console.log("UI of component has been loaded")
    }
}
```

#### 2.6.5/ `componentWillUnmount`

Hàm được gọi trước khi component bị hủy bỏ hoặc giải phóng khỏi browser, nơi sẽ xử lý để giải phóng các api request, timer, event đã tạo.

### 2.7/ Redux:

1 nơi để lưu trữ dữ liệu của browser, và nó chỉ tồn tại trong 1 vòng đời của browser.

Từng bước implement.

***B1:*** Cài đặt thư viện

```shell
npm install @reduxjs/toolkit react-redux
```

**B2:** Tạo Redux Store, sau này sẽ là nơi config store từ redux.

```react
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {},
})
```

**B3:** Bọc Redux Store vào React.

```react
import store from './app/store'
import { Provider } from 'react-redux'

root.render(
  <Provider store={ store }>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>
);
```

**B4:** Khởi tạo 1 Slice Reducers.

```react
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  // 1 ???
  name: 'counter',
  // 2
  initialState: {
    value: 0,
  },
  reducers: {
    // 3
    increment: (state) => {
      state.value += 1
    },
    // 4
    decrement: (state) => {
      state.value -= 1
    },
    // 5
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// 6
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
```

1: ????

2: Khởi tạo 1 state, có biến value với giá trị mặc định là 0.

3: Tạo 1 action có tên là increment, nhiệm vụ của nó là tăng giá trị biến value từ state.

4: 1 action tương tự như (1)

5: Tăng giá trị theo 1 khoảng động, được truyền vào từ component, đọc giá trị đó thông qua payload của action.

6: Khai báo các method sẽ được export.

*Lưu ý: * Redux reducer nó chỉ xử lý các tác vụ đồng bộ.

**B5:** Thêm Slice Reducers vào Store.

```react
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'		// NEW

export default configureStore({
  reducer: {
    counter: counterReducer,		// NEW
  },
})
```

**B6:** Sử dụng Redux State và Actions trong React Components.

```react
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'

export function Counter() {
  // 1
  const count = useSelector((state) => state.counter.value)
  // 2
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <!-- 3 -->
        <button aria-label="Increase 1" onClick={() => dispatch(increment())}>
          Increase 1
        </button>
        <span>{count}</span>
        <button aria-label="Decrease 1" onClick={() => dispatch(decrement())}>
          Decrease 1
        </button>
        <!-- 4 -->
        <button aria-label="Increase 20" onClick={() => dispatch(incrementByAmount(20))}>
          Increase 20
        </button>
        <!-- 5 -->
        <button aria-label="Delay 1s and increase 20" 
            onClick={() => setTimeout(() => {dispatch(incrementByAmount(20))}, 1000)}>
          Delay 1s and increase 20
        </button>
      </div>
    </div>
  )
}
```

1: Sử dụng `useSelector` để đọc data từ Store, `counter` là tên biến đã được định nghĩa ở **B5**.

2: Sử dụng `useDispatch` để phát ra các sự kiện tương tác tới dữ liệu.

3: Xử lý gọi phương thức `increment` từ reducer.

4: Xử lý gọi phương thức `incrementByAmount` từ reducer, và truyền vào giá 20. (20 này sẽ được đọc tại reducer thông qua `action.payload` ở **B4**)

5: Dùng `setTimeout` để xử lý delay bất đồng bộ trước khi phát giá trị.



### 2.8/ Redux Saga:

Ý nghĩa tương tự Redux, nhưng cách implement nó sẽ khác 1 chút.

**Cài đặt**

```shell
 npm install redux-saga
```



Bác bước để implement Redux Saga sẽ tập trung cơ bản ở 3 phần: Reducers, Sagas, App root.

**Phần 1:** Reducers

Đây sẽ là nơi khai báo các reducer, bao gồm giá trị mặc định, xử lý theo từng loại action thông qua switch case giá trị type truyền vào.

*Notes: Ở trường hợp `default` mình có thể hiểu đơn giản là chỗ này sẽ trả về giá trị sau này sẽ lấy ra (dùng thông qua `store.getState()` sẽ được mô tả ở các bước sau). Nó bao gồm giá trị thực tế từ state hiện tại + thêm logic nếu có xử lý ở đây.*

```react
// reducers.js
export function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

export function anotherReducer(sate = "empty", action) {
    ...
}
```

**Phần 2:** Sagas

```react
// sagas.js
import { all, call, delay, put, takeEvery } from 'redux-saga/effects'

export function* incrementAsync(action) {
  // 1
  yield delay(1000)
  yield put({type: 'INCREMENT', payload: action.payload})
}

export function* watchIncrementAsync() {
  // 2
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export default function* rootSaga() {
  yield all([
    // 3
    call(watchIncrementAsync),
  ])
}
```

**1:** Ở đây sẽ xử lý delay 1s, code ở đây sẽ chạy đồng bộ nên sau 1s hoàn thành delay thì `yield put...` mới được thực thi.

**2:** `takeEvery` ở đây là nó sẽ bắt tất cả action có `type` là `"INCREMENT_ASYNC"`, và khởi chạy hàm `incrementAsync` cho action đó.

**3:** `call`: Gán việc nhận biết các tín hiệu từ function `watchIncrementAsync`.

*Từ khóa:* `function*`: Generator function, `yield`: Xử lý các tác vụ bất đồng bộ.

**Phần 3:** App root

```react
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { counterReducer } from './reducers';
import rootSaga from './sagas';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 1
const sagaMiddleware = createSagaMiddleware()

// 2
export const counterStore = createStore(
  counterReducer,
  applyMiddleware(sagaMiddleware)
)

// 3
sagaMiddleware.run(rootSaga)

function render() {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

render()

// 4
counterStore.subscribe(render)
```

**1**: Khởi tạo 1 saga middleware.

**2**: Tạo 1 store, liên kết với reducer & saga middleware.

**3**: Chạy saga middlewware với root.

**4**: Đăng ký store cho hàm render App. (Quan trọng)

*[Tài liệu tham khảo - Redux saga org](https://redux-saga.js.org/docs/introduction/BeginnerTutorial/)*

