import {test, expect} from "@playwright/test";

test("Assertion", ()=>{
console.log("Verify assertion.");
// expect = actual come from our test case  //Actual come from the App
expect("playwright").toEqual("playwright");
expect(5).toBeGreaterThan(2);
expect(5).toBeLessThan(10);
expect(5).toBeGreaterThanOrEqual(5);
expect(5).toBeLessThanOrEqual(5);   
expect("Hello").toContain("lo");    
expect([1,2,3,4,5]).toContain
});