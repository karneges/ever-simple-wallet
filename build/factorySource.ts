const appAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[],"outputs":[]},{"name":"computeSum","inputs":[],"outputs":[]},{"name":"sendWith0","inputs":[],"outputs":[]},{"name":"sendWith0Plus1","inputs":[],"outputs":[]},{"name":"sendWith64","inputs":[],"outputs":[]},{"name":"sendWith128","inputs":[],"outputs":[]}],"data":[],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"}]} as const
const fibonacciAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[],"outputs":[]},{"name":"setNumber","inputs":[{"name":"_newNumber","type":"uint256"}],"outputs":[]},{"name":"getDetails","inputs":[],"outputs":[{"name":"_firstNumber","type":"uint256"},{"name":"_secondNumber","type":"uint256"}]},{"name":"calculateNextNumber","inputs":[],"outputs":[{"name":"_nextNumber","type":"uint256"}]}],"data":[{"key":1,"name":"_nonce","type":"uint32"}],"events":[{"name":"StateChange","inputs":[{"name":"firstNumber","type":"uint256"},{"name":"secondNumber","type":"uint256"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_nonce","type":"uint32"},{"name":"firstNumber","type":"uint256"},{"name":"secondNumber","type":"uint256"}]} as const
const pingAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[],"outputs":[]},{"name":"ping","inputs":[{"name":"_pong","type":"address"},{"name":"_message","type":"string"}],"outputs":[]},{"name":"pingCallback","inputs":[{"name":"message","type":"string"},{"name":"_initialSender","type":"address"}],"outputs":[]}],"data":[],"events":[{"name":"PingCallback","inputs":[{"name":"message","type":"string"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"}]} as const
const pongAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[],"outputs":[]},{"name":"pong","inputs":[{"name":"message","type":"string"},{"name":"_initialSender","type":"address"}],"outputs":[]},{"name":"countOfCalls","inputs":[],"outputs":[{"name":"countOfCalls","type":"uint32"}]}],"data":[],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"countOfCalls","type":"uint32"}]} as const
const simpleWalletAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"_pubKey","type":"uint256"}],"outputs":[]},{"name":"sendToMyFriend","inputs":[{"name":"dest","type":"address"},{"name":"value","type":"uint128"}],"outputs":[]},{"name":"pubKey","inputs":[],"outputs":[{"name":"pubKey","type":"uint256"}]},{"name":"balance","inputs":[],"outputs":[{"name":"balance","type":"uint128"}]}],"data":[],"events":[{"name":"BalanceChanged","inputs":[{"name":"oldBalance","type":"uint128"},{"name":"newBalance","type":"uint128"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"pubKey","type":"uint256"},{"name":"balance","type":"uint128"}]} as const

export const factorySource = {
    App: appAbi,
    Fibonacci: fibonacciAbi,
    Ping: pingAbi,
    Pong: pongAbi,
    SimpleWallet: simpleWalletAbi
} as const

export type FactorySource = typeof factorySource
export type AppAbi = typeof appAbi
export type FibonacciAbi = typeof fibonacciAbi
export type PingAbi = typeof pingAbi
export type PongAbi = typeof pongAbi
export type SimpleWalletAbi = typeof simpleWalletAbi
