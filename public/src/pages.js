var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function isViewPage(item) {
    if (item.getMenu) {
        return true;
    }
    return false;
}
var ViewPage = (function () {
    function ViewPage() {
        this.menus = [];
        this.pages = {};
        this.template = null;
        this.defaultPage = "";
    }
    ViewPage.prototype.getMenu = function (menu) {
        if (this.menus.length > menu) {
            return this.menus[menu];
        }
        return null;
    };
    return ViewPage;
}());
var UserViewer = (function (_super) {
    __extends(UserViewer, _super);
    function UserViewer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserViewer.prototype.render = function () {
        return React.createElement(DynamicTable, { header: ["ID", "First name", "Last name", "Email", "StudentID"], data: this.props.users, selector: function (item) { return [item.id.toString(), item.firstName, item.lastName, item.email, item.personId.toString()]; } });
    };
    return UserViewer;
}(React.Component));
var HelloView = (function (_super) {
    __extends(HelloView, _super);
    function HelloView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloView.prototype.render = function () {
        return React.createElement("h1", null, "Hello world");
    };
    return HelloView;
}(React.Component));
var StudentPage = (function (_super) {
    __extends(StudentPage, _super);
    function StudentPage(users, navMan) {
        var _this = _super.call(this) || this;
        _this.navMan = navMan;
        _this.menus[0] = [
            React.createElement("h4", { key: 0 }, "Labs"),
            React.createElement(NavMenu, { key: 1, links: [
                    { name: "Lab 1", uri: "opsys/lab1" },
                    { name: "Lab 2", uri: "opsys/lab2" },
                    { name: "Lab 3", uri: "opsys/lab3" },
                    { name: "Lab 4", uri: "opsys/lab4" },
                ], onClick: function (link) { _this.handleClick(link); } }),
            React.createElement("h4", { key: 4 }, "Settings"),
            React.createElement(NavMenu, { key: 3, links: [
                    { name: "Users", uri: "user" },
                    { name: "Hello world", uri: "hello" }
                ], onClick: function (link) { _this.handleClick(link); } })
        ];
        _this.defaultPage = "opsys/lab1";
        _this.pages["opsys/lab1"] = React.createElement("h1", null, "Lab1");
        _this.pages["opsys/lab2"] = React.createElement("h1", null, "Lab2");
        _this.pages["opsys/lab3"] = React.createElement("h1", null, "Lab3");
        _this.pages["opsys/lab4"] = React.createElement("h1", null, "Lab4");
        _this.pages["user"] = React.createElement(UserViewer, { users: users.getAllUser() });
        _this.pages["hello"] = React.createElement(HelloView, null);
        return _this;
    }
    StudentPage.prototype.handleClick = function (link) {
        this.navMan.navigateTo("app/student/" + link.uri);
    };
    return StudentPage;
}(ViewPage));
var TeacherPage = (function (_super) {
    __extends(TeacherPage, _super);
    function TeacherPage(users, navMan) {
        var _this = _super.call(this) || this;
        _this.navMan = navMan;
        _this.menus[0] = [
            React.createElement("h4", { key: 0 }, "Labs"),
            React.createElement(NavMenu, { key: 1, links: [
                    { name: "Teacher Lab 1", uri: "opsys/lab1" },
                    { name: "Teacher Lab 2", uri: "opsys/lab2" },
                    { name: "Teacher Lab 3", uri: "opsys/lab3" },
                    { name: "Teacher Lab 4", uri: "opsys/lab4" },
                ], onClick: function (link) { _this.handleClick(link); } }),
            React.createElement("h4", { key: 4 }, "Settings"),
            React.createElement(NavMenu, { key: 3, links: [
                    { name: "Users", uri: "user" },
                    { name: "Hello world", uri: "hello" }
                ], onClick: function (link) { _this.handleClick(link); } })
        ];
        _this.defaultPage = "opsys/lab1";
        _this.pages["opsys/lab1"] = React.createElement("h1", null, "Teacher Lab1");
        _this.pages["opsys/lab2"] = React.createElement("h1", null, "Teacher Lab2");
        _this.pages["opsys/lab3"] = React.createElement("h1", null, "Teacher Lab3");
        _this.pages["opsys/lab4"] = React.createElement("h1", null, "Teacher Lab4");
        _this.pages["user"] = React.createElement(UserViewer, { users: users.getAllUser() });
        _this.pages["hello"] = React.createElement(HelloView, null);
        return _this;
    }
    TeacherPage.prototype.handleClick = function (link) {
        this.navMan.navigateTo("app/teacher/" + link.uri);
    };
    return TeacherPage;
}(ViewPage));
var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        var _this = _super.call(this) || this;
        _this.defaultPage = "index";
        _this.pages["index"] = React.createElement("h1", null, "Welcome to autograder");
        return _this;
    }
    return HomePage;
}(ViewPage));
