#include <bits/stdc++.h>
#define ll long long int
using namespace std;

int main()
{
    ll t, n, k, a, b;

    cin >> t;

    while (t--)
    {
        cin >> n >> a >> b >> k;

        ll count = 0;

        for (ll i = a; i <= n; i += a)
        {
            count++;
        }
        for (ll i = b; i <= n; i += b)
        {
            count++;
        }
        for(ll i= a*b ;i<=n;i+= (a*b){
            count--;
        }       
        if (count >= k)
            cout << "Win" << endl;

        else
            cout << "Lose" << endl;
    }
}
