import React from 'react';
import ReactDOM from 'react-dom';
import Login from "./Login/Login";

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Route path={'/app/login'}>
                    <Login/>
                </Route>
                <ProtectedRoute
                    exact path={'/app/dashboard'}
                    component={Dashboard}
                />
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}