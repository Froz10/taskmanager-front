webpackJsonp([1],{NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("7+uW"),s={name:"Header",created:function(){this.signedIn()},methods:{setError:function(t,e){this.error=t.response&&t.response.data&&t.response.data.error||e},signedIn:function(){return localStorage.signedIn},signOut:function(){var t=this;this.$http({method:"delete",url:"/signin"}).then(function(e){delete localStorage.csrf,delete localStorage.signedIn,delete localStorage.access,delete localStorage.refresh,t.$router.replace("/"),t.$router.go()}).catch(function(e){return t.setError(e,"Cannot sign out")})}}},n={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"bg-gray-600 py-4"},[r("div",{staticClass:"container m-auto flex flex-wrap items-center justify-end"},[r("div",{staticClass:"hidden md:flex items-center"},[r("svg",{staticClass:"fill-current",attrs:{viewBox:"0 0 24 24",width:"24",height:"24"}},[r("path",{attrs:{d:"M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"}})]),t._v(" "),r("a",{staticClass:"uppercase text-sm font-mono pl-4 font-semibold no-underline text-indigo-dark hover:text-gray-900",attrs:{href:"/"}},[t._v("SIMPLE TODO LIST")])]),t._v(" "),r("div",{staticClass:"hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0"},[t.signedIn()?t._e():r("router-link",{staticClass:"whitespace-no-wrap text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900",attrs:{to:"/"}},[t._v("Sign in")]),t._v(" "),t.signedIn()?t._e():r("router-link",{staticClass:"whitespace-no-wrap text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900",attrs:{to:"/signup"}},[t._v("Sign Up")]),t._v(" "),t.signedIn()?r("router-link",{staticClass:"whitespace-no-wrap text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900",attrs:{to:"/tasks"}},[t._v("Tasks")]):t._e(),t._v(" "),t.signedIn()?r("router-link",{staticClass:"whitespace-no-wrap text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900",attrs:{to:"/projects"}},[t._v("Projects")]):t._e(),t._v(" "),t.signedIn()?r("a",{staticClass:"whitespace-no-wrap text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.signOut(e)}}},[t._v("Sign out")]):t._e()],1)])])},staticRenderFns:[]},o={name:"App",components:{Header:r("VU/8")(s,n,!1,null,null,null).exports}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header"),this._v(" "),e("router-view")],1)},staticRenderFns:[]},l=r("VU/8")(o,i,!1,null,null,null).exports,d=r("/ocq"),c={data:function(){return{email:"",password:"",error:""}},methods:{signin:function(){var t=this;this.$http({method:"post",url:"/signin",data:{email:this.email,password:this.password}}).then(function(e){return t.signinSuccessful(e)}).catch(function(e){return t.signinFailed(e)})},signinSuccessful:function(t){t.data.csrf?(localStorage.csrf=t.data.csrf,localStorage.access=t.data.access,localStorage.refresh=t.data.refresh,localStorage.signedIn=!0,this.error="",this.$router.replace("/tasks"),this.$router.go()):this.signinFailed(t)},signinFailed:function(t){this.error=t.response&&t.response.data&&t.response.data.error||"",delete localStorage.csrf,delete localStorage.access,delete localStorage.signedIn},checkSignedIn:function(){localStorage.signedIn&&this.$router.replace("/tasks")}}},u={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"max-w-sm m-auto my-8"},[r("div",{staticClass:"border p-10 border-grey-light shadow rounded"},[r("h3",{staticClass:"text-2xl mb-6 text-gray-700"},[t._v("Sign In")]),t._v(" "),r("form",{on:{submit:function(e){return e.preventDefault(),t.signin(e)}}},[t.error?r("div",{staticClass:"text-red-500 text-xs italic"},[t._v(t._s(t.error))]):t._e(),t._v(" "),r("div",{staticClass:"mb-6"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"email"}},[t._v("E-mail Address")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{type:"email",id:"email",placeholder:"E-mail Address"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"mb-6"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"password"}},[t._v("Password")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{type:"password",id:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),r("button",{staticClass:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out",attrs:{type:"submit"}},[t._v("Sign In")]),t._v(" "),r("div",{staticClass:"my-4"},[r("router-link",{staticClass:"bg-transparent hover:bg-green-500 text-sm text-blue-700 font-semibold hover:text-white py-2 px-3 border border-blue-500 hover:border-transparent rounded",attrs:{to:"/signup"}},[t._v("Sign up")])],1)])])])},staticRenderFns:[]},p=r("VU/8")(c,u,!1,null,null,null).exports,m={data:function(){return{email:"",password:"",password_confirmation:"",error:""}},methods:{signup:function(){var t=this;this.$http({method:"post",url:"/signup",data:{email:this.email,password:this.password,password_confirmation:this.password_confirmation}}).then(function(e){return t.signupSuccessful(e)}).catch(function(e){return t.siginFailed(e)})},signupSuccessful:function(t){t.data.csrf?(localStorage.csrf=t.data.csrf,localStorage.access=t.data.access,localStorage.refresh=t.data.refresh,localStorage.signedIn=!0,this.error="",this.$router.replace("/tasks")):this.signupFailed(t)},signupFailed:function(t){this.error=t.response&&t.response.data&&t.response.data.error||"Something went wrong",delete localStorage.csrf,delete localStorage.access,delete localStorage.signedIn},checkSignedIn:function(){localStorage.signedIn&&this.$router.replace("/tasks")}}},v={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"max-w-sm m-auto my-8"},[r("div",{staticClass:"border p-10 border-grey-light shadow rounded"},[r("h3",{staticClass:"text-2xl mb-6 text-gray-700"},[t._v("Sign Up")]),t._v(" "),r("form",{on:{submit:function(e){return e.preventDefault(),t.signup(e)}}},[t.error?r("div",{staticClass:"text-red"},[t._v(t._s(t.error))]):t._e(),t._v(" "),r("div",{staticClass:"mb-6"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"email"}},[t._v("E-mail Address")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{type:"email",id:"email",placeholder:"E-mail Address"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"mb-6"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"password"}},[t._v("Password")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{type:"password",id:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"mb-6"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"password_confirmation"}},[t._v("Password Confirmation")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password_confirmation,expression:"password_confirmation"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{type:"password",id:"password_confirmation",placeholder:"Password Confirmation"},domProps:{value:t.password_confirmation},on:{input:function(e){e.target.composing||(t.password_confirmation=e.target.value)}}})]),t._v(" "),r("button",{staticClass:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-green-600 hover:bg-green-400 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out",attrs:{type:"submit"}},[t._v("Sign Up")]),t._v(" "),r("div",{staticClass:"my-4"},[r("router-link",{staticClass:"bg-transparent hover:bg-blue-500 text-sm text-green-700 font-semibold hover:text-white py-2 px-3 border border-green-500 hover:border-transparent rounded",attrs:{to:"/"}},[t._v("Sign In")])],1)])])])},staticRenderFns:[]},g=r("VU/8")(m,v,!1,null,null,null).exports,f={name:"Tasks",data:function(){return{projects:[],tasks:[],newTask:[],error:"",editedTask:""}},created:function(){var t=this;localStorage.signedIn?(this.$http.get("/api/v1/tasks").then(function(e){t.tasks=e.data}).catch(function(e){return t.setError(e,"Something went wrong")}),this.$http.get("/api/v1/projects").then(function(e){t.projects=e.data}).catch(function(e){return t.setError(e,"Something went wrong")})):this.$router.replace("/")},methods:{setError:function(t,e){this.error=t.response&&t.response.data&&t.response.data.error||e},getProject:function(t){var e=this.projects.filter(function(e){return e.id===t.project_id}),r=void 0;return e.forEach(function(t){r=t.name}),r},addTask:function(){var t=this;this.newTask&&this.$http.post("/api/v1/tasks",{task:{name:this.newTask.name,status:this.newTask.status,project_id:this.newTask.project}}).then(function(e){t.tasks.push(e.data),t.newTask=""}).catch(function(e){return t.setError(e,"Cannot create task")})},removeTask:function(t){var e=this;this.$http.delete("/api/v1/tasks/"+t.id).then(function(r){e.tasks.splice(e.tasks.indexOf(t),1)}).catch(function(t){return e.setError(t,"Cannot delete task")})},editTask:function(t){this.editedTask=t},updateTask:function(t){var e=this;this.editedTask="",this.$http.patch("/api/v1/tasks/"+t.id,{task:{name:t.name,status:t.status,project_id:t.project}}).then(function(t){e.$router.go()}).catch(function(t){return e.setError(t,"Cannot update task")})}}},h={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"max-w-lg m-auto py-10"},[t.error?r("div",{staticClass:"text-red-500 text-xs italic"},[t._v(t._s(t.error))]):t._e(),t._v(" "),r("h3",{staticClass:"font-mono font-regular text-3xl mb-4"},[t._v("Add a new task")]),t._v(" "),r("form",{on:{submit:function(e){return e.preventDefault(),t.addTask(e)}}},[r("div",{staticClass:"md:flex md:items-center mb-6"},[r("label",{staticClass:"block text-dark-1500 font-bold md:text-right mb-1 md:mb-0 pr-4",attrs:{for:"task_name"}},[t._v("Name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask.name,expression:"newTask.name"}],staticClass:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",attrs:{type:"text",id:"task_name",placeholder:"Type a task name"},domProps:{value:t.newTask.name},on:{input:function(e){e.target.composing||t.$set(t.newTask,"name",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"md:flex md:items-center mb-6"},[r("label",{staticClass:"block text-dark-1500 font-bold md:text-right mb-1 md:mb-0 pr-3",attrs:{for:"task_status"}},[t._v("Status")]),t._v(" "),r("div",{staticClass:"inline-block relative w-64"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.newTask.status,expression:"newTask.status"}],staticClass:"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"task_status",placeholder:"Status"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.newTask,"status",e.target.multiple?r:r[0])}}},[r("option",{attrs:{disabled:"",value:""}},[t._v("Select status")]),t._v(" "),r("option",[t._v("Completed")]),t._v(" "),r("option",[t._v("Uncompleted")])]),t._v(" "),r("div",{staticClass:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[r("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[r("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])])]),t._v(" "),r("div",{staticClass:"md:flex md:items-center mb-6"},[r("label",{staticClass:"block text-dark-1500 font-bold md:text-right mb-1 md:mb-0 pr-1",attrs:{for:"project"}},[t._v("Project")]),t._v(" "),r("div",{staticClass:"inline-block relative w-64"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.newTask.project,expression:"newTask.project"}],staticClass:"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"project"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.newTask,"project",e.target.multiple?r:r[0])}}},[r("option",{attrs:{disabled:"",value:""}},[t._v("Select an project")]),t._v(" "),t._l(t.projects,function(e){return r("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])})],2),t._v(" "),r("div",{staticClass:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[r("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[r("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])])]),t._v(" "),r("p",{staticClass:"block text-dark-1500 font-bold md:text-left mb-1 md:mb-4 pr-3"},[t._v("Don't see an project? "),r("router-link",{staticClass:"whitespace-no-wrap text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900",attrs:{to:"/projects"}},[t._v("Create one")])],1),t._v(" "),r("input",{staticClass:"group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm leading-50 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out",attrs:{type:"submit",value:"Add Task"}})]),t._v(" "),r("hr",{staticClass:"border border-grey-light my-6"}),t._v(" "),r("ul",{staticClass:"list-reset mt-4"},t._l(t.tasks,function(e){return r("li",{key:e.id,staticClass:"py-4",attrs:{task:e}},[r("div",{staticClass:"flex items-center justify-between flex-wrap"},[r("div",{staticClass:"flex-1 flex justify-between flex-wrap pr-3"},[r("p",{staticClass:"block flex font-mono font-semibold flex items-center"},[r("svg",{staticClass:"fill-current text-indigo w-6 h-6 mr-2",attrs:{viewBox:"0 0 24 24",width:"24",height:"24"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z","clip-rule":"evenodd"}})]),t._v("\n          "+t._s(e.name)+" — "+t._s(e.status)+"\n        ")]),t._v(" "),r("p",{staticClass:"block font-mono font-semibold"},[t._v(t._s(t.getProject(e)))])]),t._v(" "),r("button",{staticClass:"bg-transparent hover:bg-green-500 text-sm text-green-700 font-semibold hover:text-white py-2 px-4 mr-2 border border-green-500 hover:border-transparent rounded",on:{click:function(r){return r.preventDefault(),t.editTask(e)}}},[t._v("Edit")]),t._v(" "),r("button",{staticClass:"bg-transparent hover:bg-red-600 text-sm text-red-700 font-semibold hover:text-white py-2 px-3 border border-red-500 hover:border-transparent rounded",on:{click:function(r){return r.preventDefault(),t.removeTask(e)}}},[t._v("Delete")])]),t._v(" "),e==t.editedTask?r("div",[r("form",{attrs:{action:""},on:{submit:function(r){return r.preventDefault(),t.updateTask(e)}}},[r("div",{staticClass:"mb-6 p-4 bg-white rounded border border-grey-light mt-4"},[r("div",{staticClass:"md:flex md:items-center mb-6"},[r("label",{staticClass:"block text-dark-1500 font-bold md:text-right mb-1 md:mb-0 pr-4"},[t._v("Name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"task.name"}],staticClass:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",domProps:{value:e.name},on:{input:function(r){r.target.composing||t.$set(e,"name",r.target.value)}}})]),t._v(" "),r("div",{staticClass:"md:flex md:items-center mb-6"},[r("label",{staticClass:"block text-dark-1500 font-bold md:text-right mb-1 md:mb-0 pr-3"},[t._v("Status")]),t._v(" "),r("div",{staticClass:"inline-block relative w-64"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.status,expression:"task.status"}],staticClass:"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"task_status"},on:{change:function(r){var a=Array.prototype.filter.call(r.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(e,"status",r.target.multiple?a:a[0])}}},[r("option",[t._v("Completed")]),t._v(" "),r("option",[t._v("Uncompleted")])]),t._v(" "),r("div",{staticClass:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[r("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[r("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])])]),t._v(" "),r("div",{staticClass:"md:flex md:items-center mb-6"},[r("label",{staticClass:"block text-dark-1500 font-bold md:text-right mb-1 md:mb-0 pr-1"},[t._v("Project")]),t._v(" "),r("div",{staticClass:"inline-block relative w-64"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.project,expression:"task.project"}],staticClass:"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"project_update"},on:{change:function(r){var a=Array.prototype.filter.call(r.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(e,"project",r.target.multiple?a:a[0])}}},[r("option",{attrs:{disabled:"",value:""}},[t._v("Select an project")]),t._v(" "),t._l(t.projects,function(e){return r("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])})],2),t._v(" "),r("div",{staticClass:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[r("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[r("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])])]),t._v(" "),r("input",{staticClass:"py-2 px-2 border border-transparent text-sm leading-50 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out",attrs:{type:"submit",value:"Update"}})])])]):t._e()])}),0)])},staticRenderFns:[]},b=r("VU/8")(f,h,!1,null,null,null).exports,x={name:"Projects",data:function(){return{projects:[],newProject:[],error:"",editedProject:""}},created:function(){var t=this;localStorage.signedIn?this.$http.get("/api/v1/projects").then(function(e){t.projects=e.data}).catch(function(e){return t.setError(e,"Something went wrong")}):this.$router.replace("/")},methods:{setError:function(t,e){this.error=t.response&&t.response.data&&t.response.data.error||e},addProject:function(){var t=this;this.newProject&&this.$http.post("/api/v1/projects",{project:{name:this.newProject.name}}).then(function(e){t.projects.push(e.data),t.newProject=""}).catch(function(e){return t.setError(e,"Cannot create project")})},removeProject:function(t){var e=this;this.$http.delete("/api/v1/projects/"+t.id).then(function(r){e.projects.splice(e.projects.indexOf(t),1)}).catch(function(t){return e.setError(t,"Cannot delete project")})},editProject:function(t){this.editedProject=t},updateProject:function(t){var e=this;this.editedProject="",this.$http.patch("/api/v1/projects/"+t.id,{project:{name:t.name}}).catch(function(t){return e.setError(t,"Cannot update project")})}}},w={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"max-w-md m-auto py-10"},[t.error?r("div",{staticClass:"text-red-500 text-xs italic"},[t._v(t._s(t.error))]):t._e(),t._v(" "),r("h3",{staticClass:"font-mono font-regular text-3xl mb-4"},[t._v("Add a new project")]),t._v(" "),r("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.addProject(e)}}},[r("div",{staticClass:"md:flex md:items-center mb-6"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.newProject.name,expression:"newProject.name"}],staticClass:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",attrs:{placeholder:"Type an project name"},domProps:{value:t.newProject.name},on:{input:function(e){e.target.composing||t.$set(t.newProject,"name",e.target.value)}}})]),t._v(" "),r("input",{staticClass:"group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm leading-50 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out",attrs:{type:"submit",value:"Add Project"}})]),t._v(" "),r("hr",{staticClass:"border border-grey-light my-6"}),t._v(" "),r("ul",{staticClass:"list-reset mt-4"},t._l(t.projects,function(e){return r("li",{key:e.id,staticClass:"py-4",attrs:{project:e}},[r("div",{staticClass:"flex items-center justify-between flex-wrap"},[r("p",{staticClass:"block flex-1 font-mono font-semibold flex items-center "},[r("svg",{staticClass:"fill-current text-indigo w-6 h-6 mr-2",attrs:{viewBox:"0 0 20 20",width:"20",height:"20"}},[r("title",[t._v(" project")]),r("path",{attrs:{d:"M15.75 8l-3.74-3.75a3.99 3.99 0 0 1 6.82-3.08A4 4 0 0 1 15.75 8zm-13.9 7.3l9.2-9.19 2.83 2.83-9.2 9.2-2.82-2.84zm-1.4 2.83l2.11-2.12 1.42 1.42-2.12 2.12-1.42-1.42zM10 15l2-2v7h-2v-5z"}})]),t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),r("button",{staticClass:"bg-tranparent text-sm hover:bg-green-500 text-white text-green-700 border border-green-500 hover:text-white font-bold py-2 px-4 mr-2 rounded",on:{click:function(r){return r.preventDefault(),t.editProject(e)}}},[t._v("Edit")]),t._v(" "),r("button",{staticClass:"bg-transparent hover:bg-red-600 text-sm text-red-700 font-semibold hover:text-white py-2 px-3 border border-red-500 hover:border-transparent rounded",on:{click:function(r){return r.preventDefault(),t.removeProject(e)}}},[t._v("Delete")])]),t._v(" "),e==t.editedProject?r("div",[r("form",{attrs:{action:""},on:{submit:function(r){return r.preventDefault(),t.updateProject(e)}}},[r("div",{staticClass:"mb-6 p-4 bg-white rounded border border-grey-light mt-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"project.name"}],staticClass:"input",domProps:{value:e.name},on:{input:function(r){r.target.composing||t.$set(e,"name",r.target.value)}}}),t._v(" "),r("input",{staticClass:" my-2 bg-transparent text-sm hover:bg-blue hover:text-white text-blue border border-blue no-underline font-bold py-2 px-4 rounded cursor-pointer",attrs:{type:"submit",value:"Update"}})])])]):t._e()])}),0)])},staticRenderFns:[]},_=r("VU/8")(x,w,!1,null,null,null).exports;a.a.use(d.a);var y=new d.a({mode:"history",routes:[{path:"/projects",name:"Projects",component:_},{path:"/tasks",name:"Tasks",component:b},{path:"/",name:"Signin",component:p},{path:"/signup",name:"Signup",component:g}]}),C=r("mtWM"),k=r.n(C),j=r("//Fk"),S=r.n(j);k.a.interceptors.request.use(function(t){return localStorage.signedIn&&(t.headers={Authorization:"Bearer "+localStorage.access}),t}),k.a.interceptors.response.use(function(t){return t},function(t){return 401===t.response.status&&(delete localStorage.access,delete localStorage.signedIn,delete localStorage.csrf,delete localStorage.refresh,this.$router.go()),S.a.reject(t)});r("Q00M");a.a.config.productionTip=!1,a.a.prototype.$http=k.a,k.a.defaults.baseURL="http://localhost:3000",new a.a({el:"#app",router:y,components:{App:l},template:"<App/>"})},Q00M:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.8c0af818e983f9c45155.js.map