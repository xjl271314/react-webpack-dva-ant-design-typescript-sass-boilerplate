import dva from 'dva';
import createHistory from 'history/createBrowserHistory'
import './global.scss';
import './mock'

// 1. Initialize
const app = dva({
    history:createHistory()
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/count').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');