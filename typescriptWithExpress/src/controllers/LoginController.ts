import { Router, Request, Response, NextFunction } from "express";
import { get , controller, use, post, bodyValidator } from "./decoraters";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

@controller("/auth")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void{
    res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>
      <button>Submit</button>
    </form>
  `);
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response): void {
    req.session = { loggedIn: true };
    res.redirect('/');
  }

  @get('/logout')
  getLogout(req: Request, res: Response): void{
    req.session = undefined;
    res.redirect('/');
  }
}
