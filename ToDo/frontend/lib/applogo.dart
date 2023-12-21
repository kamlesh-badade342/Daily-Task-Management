import 'package:flutter/material.dart';
import 'package:velocity_x/velocity_x.dart';

class CommonLogo extends StatelessWidget {
  const CommonLogo({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        // Image.network('https://www.printables.com/model/107689-avengers-logo#preview',width: 100,)
        Image.asset('assets/avengers-logo.webp',width: 100,),
      ],
    );
  }
}
