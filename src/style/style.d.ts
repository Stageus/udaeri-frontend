// import original module declarations
import "styled-components";

// 디폴트 테마 타입 적어두는 파일
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      BGColor1: string;
      BGColor2: string;
      fontColor1: string;
      fontColor2: string;
      fontColor3: string;
      lineColor1: string;
      lineColor2: string;
      lineColor3: string;
    };

    width: number;

    font : {
      Bold : string;
      Medium : string;
      Regular : string;
      Light : string;
      Thin : string;
    }
  }
}
