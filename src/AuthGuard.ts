import * as jwt from 'jsonwebtoken'
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'
import { Observable } from 'rxjs'
import { env } from 'process'
import { Roles } from '@prisma/client'


@Injectable()
export class AuthGuard implements CanActivate {

  roles: string[]
  constructor(roles: Roles[] = []) {
    this.roles = roles
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

    const { req }= context.switchToHttp().getNext()
    const request = req || context.switchToHttp().getRequest()


    if (!request.headers.authorization) {
      throw new UnauthorizedException()
    }
    const token = request.headers.authorization.split(' ')[1]

    try {
      const decoded = jwt.verify(token, "Token" || '')
      if (this.roles.length && this.roles.indexOf(decoded.hakAkses) === -1) {
        throw new UnauthorizedException()
      }

      request.user = decoded

      return true
    } catch (e) {
      throw new UnauthorizedException()
    }
  }
}
