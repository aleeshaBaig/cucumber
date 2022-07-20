import {Given,When,Then} from "cucumber"
import {browser} from "protractor"
Given ("I launch the url",{timeout:60*1000},function(){
browser.get("https://angularjs.org/")
})