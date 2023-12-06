import {describe ,expect, it, beforeAll, test} from 'vitest'
import {JSDOM} from 'jsdom'
import { cartButton, redColor } from '../src/js/app';

describe('APP',()=>{
    let dom;
    beforeAll(async () => {
        dom = await JSDOM.fromFile("index.html", {
          resources: "usable",
          runScripts: "dangerously",
        });
      });
      it("should render css", async () => {
        let document = dom.window.document;
        let link = document.querySelector("link");
        console.log(link.href);
        expect(link.href).toMatch(/\/src\/css\/style.css$/);
      });
})

