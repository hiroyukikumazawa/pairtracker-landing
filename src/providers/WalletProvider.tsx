import { FC, PropsWithChildren } from 'react'
import { useMemo, useState } from 'react'

import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { GlowWalletAdapter } from '@solana/wallet-adapter-glow'
import { ExodusWalletAdapter } from '@solana/wallet-adapter-exodus'
import { SlopeWalletAdapter } from '@solana/wallet-adapter-slope'
import { SolflareWalletAdapter, initialize } from '@solflare-wallet/wallet-adapter'
import {
    PhantomWalletAdapter,
    TorusWalletAdapter,
    TrustWalletAdapter,
    // LedgerWalletAdapter,
    MathWalletAdapter,
    TokenPocketWalletAdapter,
    CoinbaseWalletAdapter,
    SolongWalletAdapter,
    Coin98WalletAdapter,
    SafePalWalletAdapter,
    BitpieWalletAdapter,
    BitgetWalletAdapter
} from '@solana/wallet-adapter-wallets'
import { registerMoonGateWallet } from '@moongate/moongate-adapter'
import { TipLinkWalletAdapter } from '@tiplink/wallet-adapter'
import { WalletConnectWalletAdapter } from '@walletconnect/solana-adapter'
// import { LedgerWalletAdapter } from './Ledger/LedgerWalletAdapter'
import { type Adapter } from '@solana/wallet-adapter-base'
import { clusterApiUrl } from '@solana/web3.js'

// import { sendWalletEvent } from '@/api/event'
// import { useEvent } from '@/hooks/useEvent'

initialize()
const defaultNetWork = WalletAdapterNetwork.Mainnet
const defaultEndpoint = clusterApiUrl(defaultNetWork)

const MyWalletProvider: FC<PropsWithChildren<any>> = ({ children }) => {
    const [network] = useState<WalletAdapterNetwork>(defaultNetWork)
    // const rpcNodeUrl = "https://api.mainnet-beta.solana.com/"
    const wsNodeUrl = "wss://api.mainnet-beta.solana.com/"
    // const [endpoint] = useState<string>(defaultEndpoint)
    const [endpoint] = useState<string>(defaultEndpoint)

    registerMoonGateWallet({
        authMode: 'Ethereum',
        position: 'top-right'
        // logoDataUri: 'OPTIONAL ADD IN-WALLET LOGO URL HERE',
        // buttonLogoUri: 'ADD OPTIONAL LOGO FOR WIDGET BUTTON HERE'
    })
    registerMoonGateWallet({
        authMode: 'Google',
        position: 'top-right'
        // logoDataUri: 'OPTIONAL ADD IN-WALLET LOGO URL HERE',
        // buttonLogoUri: 'ADD OPTIONAL LOGO FOR WIDGET BUTTON HERE'
    })
    // registerMoonGateWallet({
    //   authMode: 'Twitter',
    //   position: 'top-right'
    //   // logoDataUri: 'OPTIONAL ADD IN-WALLET LOGO URL HERE',
    //   // buttonLogoUri: 'ADD OPTIONAL LOGO FOR WIDGET BUTTON HERE'
    // })
    registerMoonGateWallet({
        authMode: 'Apple',
        position: 'top-right'
        // logoDataUri: 'OPTIONAL ADD IN-WALLET LOGO URL HERE',
        // buttonLogoUri: 'ADD OPTIONAL LOGO FOR WIDGET BUTTON HERE'
    })

    const _walletConnect = useMemo(() => {
        const connectWallet: WalletConnectWalletAdapter[] = []
        try {
            connectWallet.push(
                new WalletConnectWalletAdapter({
                    network: network as WalletAdapterNetwork.Mainnet,
                    options: {
                        projectId: import.meta.env.VITE_WALLET_CONNECT_PJ_ID,
                        metadata: {
                            name: 'PairTracker',
                            description: 'PairTracker',
                            url: 'https://pairtracker.org/',
                            icons: ['https://pairtracker.org/logo/logo-only-icon.svg']
                        }
                    }
                })
            )
        } catch (e) {
            // console.error('WalletConnect error', e)
        }
        return connectWallet
    }, [network])

    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
            new SolflareWalletAdapter(),
            new SlopeWalletAdapter({ endpoint }),
            new TorusWalletAdapter(),
            // new LedgerWalletAdapter(),
            ..._walletConnect,
            new GlowWalletAdapter(),
            new TrustWalletAdapter(),
            new MathWalletAdapter({ endpoint }),
            new TokenPocketWalletAdapter(),
            new CoinbaseWalletAdapter({ endpoint }),
            new SolongWalletAdapter({ endpoint }),
            new Coin98WalletAdapter({ endpoint }),
            new SafePalWalletAdapter({ endpoint }),
            new BitpieWalletAdapter({ endpoint }),
            new BitgetWalletAdapter({ endpoint }),
            new ExodusWalletAdapter({ endpoint }),
            new TipLinkWalletAdapter({
                clientId: import.meta.env.VITE_WALLET_TIP_WALLET_KEY ?? '',
                title: 'PairTracker',
                theme: 'system'
            }) as unknown as Adapter
        ],
        [network, endpoint]
    )

    return (
        <ConnectionProvider endpoint={endpoint} config={{ disableRetryOnRateLimit: true, wsEndpoint: wsNodeUrl }}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}

export default MyWalletProvider