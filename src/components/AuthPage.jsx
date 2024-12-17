import React from 'react';
import styled from 'styled-components';
import AccountBox from '../components/accountBox/index';

const AuthContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const FormWrapper = styled.div`
  width: 400px; /* Tăng chiều rộng */
  min-height: 600px; /* Tăng chiều cao tối thiểu */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  background-color: #ffffff;
  padding: 30px; /* Thêm khoảng cách padding */
`;

function AuthPage() {
  return (
    <AuthContainer>
      <FormWrapper>
        <AccountBox />
      </FormWrapper>
    </AuthContainer>
  );
}

export default AuthPage;
