import React from 'react';


function EmailComponet(){

    return(
        // 이곳은 ui 그리는 곳 이라고 꾸준히 생각하기
        <div>
            <label for={'user-email'} className={'form-label'}>
                이메일 : <input type={'text'} className={'form-control'} id={'user-email'}/>
            </label>
            <div>
                <button type={'submit'} className={'btn btn-primary'}>이메일확인</button>
            </div>
        </div>
    )

}

export default EmailComponet;