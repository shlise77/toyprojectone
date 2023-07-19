import React from 'react';
import EmailComponet from './EmailComponent';


// 슈도코드
// 1. ui 그리기
// 2. 

function LoginSign(){

    return(
        <div className={'row mx-auto'}>
        <div className={'d-grid gap-2 d-md-block'}>
            {/* 이메일 컴포넌트 */}
            <EmailComponet />
            <div className={'mt-3'}>
                <button type={'submit'} className={'btn btn-primary'}>로그인</button>
                <button type={'reset'} className={' ms-3 btn btn-danger'}>취소</button>
            </div>
        </div>
    </div>
    )

}

export default LoginSign;