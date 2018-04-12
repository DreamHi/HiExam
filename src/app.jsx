import 'antd/dist/antd.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import SLogin from './modules/system/scenes/SLogin';
import CDefaultLayout from './modules/system/components/CDefaultLayout';
import SExamsCategory from './modules/exams/scenes/SExamsCategory';
import SExamsList from './modules/exams/scenes/SExamsList';
import SQuestionsCategory from './modules/exams/scenes/SQuestionsCategory';
import SQuestionsList from './modules/exams/scenes/SQuestionsList';
import SManageList from './modules/manage/scenes/SManageList';
import SNotFound from './modules/system/scenes/SNotFound';

import storage from './util/storage';
import { ROUTE_LOGIN, ROUTE_HOME, ROUTE_EXAM, ROUTE_QUESTION,
         ROUTE_QUESTION_LIST, ROUTE_MANAGE } from './util/constants';
import './static/css/resetant.css';
import './static/css/index.css';
import './static/css/exam.css';

const rootElement = document.getElementById('root');

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => storage.isAuthenticatedUser()
        ? <CDefaultLayout><Component {...props} /></CDefaultLayout>
        : <Redirect to={ROUTE_LOGIN} />}
    />
  )
};

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => !storage.isAuthenticatedUser()
        ? <Component {...props} />
        : <Redirect to={ROUTE_HOME} />}
    />
  );
};

ReactDOM.render(
  <Router>
    <Switch>
      <PublicRoute path="/" exact component={SLogin} />
      <PublicRoute path={ROUTE_LOGIN} component={SLogin} />
      <PrivateRoute path={ROUTE_HOME} exact component={SExamsCategory} />
      <PrivateRoute path={ROUTE_EXAM} exact component={SExamsList} />
      <PrivateRoute path={ROUTE_QUESTION} exact component={SQuestionsCategory} />
      <PrivateRoute path={ROUTE_QUESTION_LIST} exact component={SQuestionsList} />
      <PrivateRoute path={ROUTE_MANAGE} component={SManageList} />
      <Route path="*" component={SNotFound} />
    </Switch>
  </Router>,
  rootElement,
);
