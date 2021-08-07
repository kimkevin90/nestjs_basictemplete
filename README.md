nest js 모듈
데코레이터로 주석이 달린 클래스 이다.
애플리케이션에는 하나 이상의 모듈이 필요하다.
모듈 생성 명령어 nest g module '모듈명'

nest js controller
컨트롤러는 들어오는 요청을 처리하고 클라이언트에 응답을 반환
controller는 @Controller 데코레이터로 클래스를 정의한다.
handler는 @GET @POST @DELETE 등과 같은 컨트롤러 클래스 내 메서드이다.
컨트롤러 생성 명령어 nest g controller '컨트롤러명' --no-spec

nest se service
@Injectable 데코레이터로 감싸져서 제공되며, 서비스 인스턴스는 애플리케이션 전체에서 사용 될 수 있다.
서비스 로직 , 데이터베이스 관련 로직, 데이터 유효성검사
Injectable 데코레이터를 이용해서 다른 컴포넌트에서 이 서비스를 사용 할 수 있게 한다.
controller에서 service를 이용하기 위해서 Controller 클래스의 Constructor안에 Dependency Injection 실행
서비스 생성 명령어 nest g service '서비스명' --no-spec

컨트롤러에 서비스 인젝션 시 Ts에서 제공하는 접근 제한자(publice, protected, private)을 생성자 파라미터에 선언하면 접근 제한자가 사용된 파라미터는 암묵적으로 클래스 프로퍼티로 선언된다.

nest js provider란
대부분의 기본 nest 클래스는 서비스, 레포지토리, 팩토리, 헬퍼 등 프로바이더로 취급 가능하다. 프로바이더의 주요 아이디어는 종속성으로 주입할 수 있다는 것입니다. 즉, 객체는 서로 다양한 관계를 만들 수 있으며 객체의 인스턴스를 '연결'하는 기능은 대부분 Nest 런타임 시스템에 위임 가능하다.
Provider 등록은 모듈 파일에서 가능하다.
~ 종속성 주입 : 각각의 서비스를 컨트롤러에 주입

모델 정의
Class를 이용하거나 Interface를 이용한다.
Interface는 변수의 타입만을 체크한다.
classessms 변수의 타입도 체크하고 인스턴스 또한 생성 가능

DTO(Data Transfer Object)란
계층간 데이터 교환을 위한 객체이다.
DB에서 데이터를 얻어 Service나 Controller 등으로 보낼 때 사용하는 객체
DTO는 데이터가 네트워크를 통해 전송되는 방법을 정의하는 객체
Interface나 class를 이용해서 정의 할 수 있다.

DTO를 쓰는 이유
데이터 유효성을 체크하는데 효율적
유지보수과정에서 다수의 프로퍼티를 관리 가능
타입스크립트의 타입으로도 사용된다.
ss