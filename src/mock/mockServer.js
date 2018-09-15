import Mock from "mockjs"

import data from "./data.json"
import home_data from "./home_data.json"
import shiwu_data from "./shiwu_data.json"
import fenlei_data from "./fenlei_data.json"
import data_nav from "./data_nav.json"

Mock.mock("/category",{code:0,data:fenlei_data.categoryL1List})

Mock.mock("/findmore",{code:0,data:shiwu_data.findMore})

