#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n, t, i, max, position;
    cin >> t;

    while (t--)
    {
        max = -100000;
        position = 0;
        cin >> n;

        int a[n], d[n], value[n];

        for (i = 0; i < n; i++)
            cin >> a[i];

        for (i = 0; i < n; i++)
            cin >> d[i];

        value[0] = d[0] - a[1] - a[n - 1];
        value[n - 1] = d[n - 1] - a[0] - a[n - 2];

        for (i = 1; i < n - 1; i++)
        {
            value[i] = d[i] - a[i - 1] - a[i + 1];
        }

        // for (i = 0; i < n; i++)
        //     cout << value[i] << " ";

        for (i = 0; i < n; i++)
        {
            if (value[i] > max)
            {
                max = value[i];
                position = d[i];
            }
        }

        if (max <= 0)
        {
            cout << "-1" << endl;
        }
        else
        {
            cout << position << endl;
        }
    }
}