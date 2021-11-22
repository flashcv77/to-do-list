import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';
import Home from './pages/Home/Home';
import Books from './pages/Books/Books';
import BookDetails from './pages/Books/BookDetails';
import BookStatistic from './pages/BookStatistic';

const { Header, Footer, Content } = Layout;

export const App = () => (
  <div className="App">
    <Router>
      <Layout>
        <Header>
          <Navigation />
        </Header>
        <Content
          style={{
            padding: '0 50px',
            minHeight: 'calc(100vh - 134px)',
            backgroundColor: '#feffb8',
          }}
        >

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/books" component={Books} />
            <Route exact path="/statistic" component={BookStatistic} />
            <Route exact path="/books/:id" component={BookDetails} />
          </Switch>

        </Content>

        <Footer
          style={{
            backgroundColor: '#001529',
            color: '#fff',
          }}
        >
          <div className="bottom-bar">
            Made
            {' '}
            by
            <a rel="noopener noreferrer" href="/">
              {' '}
              Andriy Martynyuk
            </a>
          </div>
        </Footer>
      </Layout>
    </Router>
  </div>
);

export default App;
