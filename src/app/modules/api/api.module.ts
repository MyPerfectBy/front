import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

const uri = 'http://dev-back.makeperfect.by/apiGateway/';

export function createApollo(httpLink: HttpLink) {

    return {
        link: httpLink.create({uri, withCredentials: true}),
        cache: new InMemoryCache(),
    };
}

@NgModule({
    imports: [
        ApolloModule,
        HttpLinkModule
    ],
    providers: [
        {
            provide: APOLLO_OPTIONS,
            useFactory: createApollo,
            deps: [HttpLink],
        }
    ],
})
export class ApiModule {
}
