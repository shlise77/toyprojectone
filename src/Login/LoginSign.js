import React from 'react';


// 슈도코드
// 1. ui 그리기
// 2. 


// 여기가 부모 컴포넌트가 되고 EmailComponet는 자식 컴포넌트가 되고 자식 컴포넌트의 값을 바꿔 줄려면
// 부모 컴포넌트에서 useState 라는 훅 기능을 써야 된다.
// useState 는 [읽기전용 변수, 값을 변경 시켜주는 변수] 이렇게 나뉘게 된다.


//2023-07-23 너무 컴포넌트를 고민을 한것이 아닐까 어떻게 효율적으로 할까라는 의문은 아무 좋은 고민이라고 생각을 하지만 지금 나에게는
//           이제막 리액트를 하는 입장에서는 쓸때없는 고민 이라고 생각한다.

// 질문 하나 app01~00.js 이렇게 늘어 날수 있는데 파일명 app은 기본적인 파일인가?


function LoginSign(props){


    return(
        <div className={'container'}>
            <div className={'row mt-5 pt-5'}>
                <div className={'col-sm-8 mx-auto border border-3'}>
                    <p className={'fs-3 text-center'}>회원가입</p>
                    {/* email-layout */}
                    <div className={'d-flex'}>
                        <div className={'col-sm-4'}>
                            <label for={'user-email'} className={'form-label d-flex justify-content-center'}>이메일 :</label>
                        </div>
                        <div className={'col-sm'}>
                            <input id={'user-email'} className={'form-control'}/>
                            <button type={'button'} className={'btn btn-primary'}>이메일 인증</button>
                        </div>
                    </div>
                    <div className={'d-flex'}>
                        <div className={'col-sm-4'}>
                            <label for={'user-id'} className={'form-label d-flex justify-content-center'}>아이디 :</label>
                        </div>
                        <div className={'col-sm'}>
                            <input id={'user-id'} className={'form-control'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default LoginSign;