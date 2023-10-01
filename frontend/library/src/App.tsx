import React from 'react';
import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import { BookCheckoutPage } from './layouts/BookCheckoutPage/BookCheckoutPage';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
import { oktaConfig } from './lib/oktaConfig';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { Security, LoginCallback } from '@okta/okta-react';
import LoginWidget from './Auth/LoginWidget';
import { ReviewListPage } from './layouts/BookCheckoutPage/ReviewListPage/ReviewListPage';
import { ShelfPage } from './layouts/ShelfPage/ShelfPage';
import { MessagesPage } from './layouts/MessagesPage/MessagesPage';
import { ManageLibraryPage } from './layouts/ManageLibraryPage/ManageLibraryPage';
import HomePage from './layouts/Home/HomePage';

const oktaAuth = new OktaAuth(oktaConfig);

const App = () => {
  return (
    <BrowserRouter>
      <div className='d-flex flex-column min-vh-100'>
        <Security oktaAuth={oktaAuth} restoreOriginalUri={function (oktaAuth: OktaAuth, originalUri: string): void | Promise<void> {
          throw new Error('Function not implemented.');
        } }>
          <Navbar />
          <div className='flex-grow-1'>
            <Routes>
              <Route path='/' element={<Navigate to='/home' />} />
              <Route path='/home' element={<HomePage />} />
              <Route path='/search' element={<SearchBooksPage />} />
              <Route path='/reviewlist/:bookId' element={<ReviewListPage />} />
              <Route path='/checkout/:bookId' element={<BookCheckoutPage />} />
              <Route
                path='/login'
                element={<LoginWidget config={oktaConfig} />}
              />
              <Route path='/login/callback' element={<LoginCallback />} />
              <Route path='/shelf' element={<ShelfPage />} />
              <Route path='/messages' element={<MessagesPage />} />
              <Route path='/admin' element={<ManageLibraryPage />} />
            </Routes>
          </div>
          <Footer />
        </Security>
      </div>
    </BrowserRouter>
  );
};

export default App;
