Promise.all = 입력으로 promise 배열을 받음. 입력 받은 모든 promise 가 resolve 되었을 때 resolve 됨. 한 개라도 reject 이면 reject. 반환 값은 resolve 된 모든 프로미스의 반환 값이 배열로 나옴.
Promise.any = 위와 동일. 한 개만 resolve 여도 resolve 됨. 제일 먼저 resolve 된 프로미스의 반환 값이 any 의 반환 값이 됨
Promise.sequantial = promise 를 만드는 함수의 배열을 입력으로 받음. 입력 받은 순서대로 실행 시키는 순서. 하지만 promise 가 resolve 되어야 다음 순서의 promise 를 실행함. 반환 값은 void
sleep = Promise, setTimeout 만 씀. 타임아웃 시간이 끝나면 resolve 되는 유틸 함수
